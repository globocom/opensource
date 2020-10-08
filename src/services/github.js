const GITHUB_TOKEN = process.env.GATSBY_GITHUB_TOKEN

const ORGS = [
  { login: "clappr", stars: 30 },
  { login: "fastlane-queue", stars: 10 },
  { login: "galeb", stars: 10 },
  { login: "globocom", stars: 30 },
  { login: "thumbor", stars: 30 },
  { login: "tsuru", stars: 30 },
]

const ORG_LOGINS = ORGS.map(org => org.login)

const EXCLUDE_REPOS = []

const joinSearchNodes = data => {
  let nodes = []
  for (let org in data) {
    nodes = nodes.concat(data[org].nodes)
  }
  return nodes
}

const sortRepos = (repos, field = "stargazers") => {
  return repos.sort((a, b) => {
    const totalA = a[field].totalCount
    const totalB = b[field].totalCount
    return totalB - totalA
  })
}

const githubClient = async (query, variables = {}) => {
  let resp

  try {
    resp = await fetch("https://api.github.com/graphql", {
      method: "POST",
      body: JSON.stringify({ query, variables }),
      headers: {
        Authorization: `Bearer ${GITHUB_TOKEN}`,
      },
    })
  } catch (error) {
    console.error("[GITHUB] Fail to fetch", error)
  }

  if (resp.status !== 200) {
    console.error(`[GITHUB] Fail to fetch. Status: ${resp.status}`)
    return null
  }

  const data = await resp.json()
  return data.data
}

const stripDash = str => str.replace(/-/g, "")

const getOrgRepos = async () => {
  let searchQuery = ""
  ORGS.forEach(({ login, stars }) => {
    searchQuery += `
      ${stripDash(login)}: search(
        first: 50,
        query: "org:${login} stars:>${stars}",
        type: REPOSITORY
      ) {
        ...SearchResultFields
      }
    `
  })

  const query = `
    {
      ${searchQuery}
    }

    fragment SearchResultFields on SearchResultItemConnection {
      nodes {
        ... on Repository {
          id
          name
          description
          url
          isArchived
          primaryLanguage {
            name
            color
          }
          object(expression: "master") {
            ... on Commit {
              history {
                totalCount
              }
            }
          }
          issues(states: OPEN) {
            totalCount
          }
          pullRequests {
            totalCount
          }
          stargazers {
            totalCount
          }
        }
      }
    }
  `

  const data = await githubClient(query)
  let repos = []
  if (data) {
    repos = sortRepos(joinSearchNodes(data)).filter(
      repo => !repo.isArchived && !EXCLUDE_REPOS.includes(repo.name)
    )
  }

  return repos
}

const getUserProgress = async login => {
  const query = `
    query GetUserProgress($login: String!) {
      user(login: $login) {
        avatarUrl
        pullRequests(
          first: 100,
          states: [OPEN, MERGED],
          orderBy: { field: CREATED_AT, direction: DESC }
        ) {
          nodes {
            title
            createdAt
            closed
            merged
            mergedAt
            state
            repository {
              name
              owner {
                login
              }
            }
          }
        }
      }
    }
  `

  const data = await githubClient(query, {
    login,
  })

  if (data) {
    const { pullRequests, ...user } = data.user
    const stats = { ...user, merged: 0, opened: 0 }

    pullRequests.nodes
      .filter(pr => {
        const currentYear = new Date().getFullYear()
        const startDate = new Date(currentYear, 9, 1, 0, 0)
        const endDate = new Date(currentYear, 10, 1, 0, 0)

        const createdAt = new Date(pr.createdAt)
        const targetOrg = pr.repository.owner.login
        return (
          createdAt >= startDate &&
          createdAt <= endDate &&
          ORG_LOGINS.includes(targetOrg)
        )
      })
      .forEach(pr => {
        if (pr.state === "MERGED") {
          stats.merged += 1
          stats.opened += 1
        }
        if (pr.state === "OPEN") {
          stats.opened += 1
        }
      })

    return stats
  }
}

const getIssuesUrl = () => {
  const url = new URL("https://github.com/search")
  const query = ["label:hacktoberfest", "state:open", "type:issue"]

  ORG_LOGINS.forEach(login => {
    query.push(`user:${login}`)
  })
  url.searchParams.append("q", query.join(" "))

  return url.toString()
}

export { getUserProgress, getIssuesUrl }
