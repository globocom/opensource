const GITHUB_TOKEN = process.env.GATSBY_GITHUB_TOKEN

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

const getOrganizationMembers = async () => {
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

const getOrganizationRepos = async () => {
  const query = `
    {
      organization(login: "globocom") {
        name
        repositories(
          first: 50,
          isFork: false,
          orderBy: {
            field: STARGAZERS,
            direction: DESC
          }
        ) {
          nodes {
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
          totalCount
        }
      }
    }
  `
  return await gitHubclient(query)
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

export { getOrganizationMembers, getOrganizationRepos, getRepoStats }
