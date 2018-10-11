const GITHUB_TOKEN = process.env.GATSBY_GITHUB_TOKEN

const ORGS = [
  { login: 'globocom', stars: 30 },
  { login: 'tsuru', stars: 30 },
  { login: 'clappr', stars: 30 },
  { login: 'thumbor', stars: 30 },
  { login: 'galeb', stars: 10 },
]

const EXCLUDE_REPOS = ['tsuru', 'thumbor', 'clappr', 'megadraft']

const joinSearchNodes = data => {
  let nodes = []
  for (let org in data) {
    nodes = nodes.concat(data[org].nodes)
  }
  return nodes
}

const sortRepos = (repos, field = 'stargazers') => {
  return repos.sort((a, b) => {
    const totalA = a[field].totalCount
    const totalB = b[field].totalCount
    return totalB - totalA
  })
}

const gitHubclient = async (query, variables = {}) => {
  let resp

  try {
    resp = await fetch('https://api.github.com/graphql', {
      method: 'POST',
      body: JSON.stringify({ query, variables }),
      headers: {
        Authorization: `Bearer ${GITHUB_TOKEN}`,
      },
    })
  } catch (error) {
    console.error('[GITHUB] Fail to fetch', error)
  }

  if (resp.status !== 200) {
    console.error(`[GITHUB] Fail to fetch. Status: ${resp.status}`)
    return null
  }

  const data = await resp.json()
  return data.data
}

const getOrgMembers = async () => {
  const query = `
    {
      organization(login: "globocom") {
        name
        members(first: 100) {
          nodes {
            id
            name
            url
            avatarUrl
          }
          totalCount
        }
      }
    }
  `
  return await gitHubclient(query)
}

const getOrgRepos = async () => {
  let searchQuery = ''
  ORGS.forEach(({ login, stars }) => {
    searchQuery += `
      ${login}: search(
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

  const data = await gitHubclient(query)
  let repos = []
  if (data) {
    repos = sortRepos(joinSearchNodes(data)).filter(
      repo => !EXCLUDE_REPOS.includes(repo.name)
    )
  }

  return repos
}

const getRepoStats = async (owner, name) => {
  const query = `
    query RepositoryStats($owner: String!, $name: String!) {
      repository(owner: $owner, name: $name) {
        object(expression: "master") {
          ... on Commit {
            history {
              totalCount
            }
          }
        }
        issues (states: OPEN) {
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
  `

  return await gitHubclient(query, {
    owner,
    name,
  })
}

export { getOrgMembers, getOrgRepos, getRepoStats }
