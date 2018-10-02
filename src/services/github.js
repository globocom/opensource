// import ApolloClient from 'apollo-boost'
// import { createHttpLink } from 'apollo-link-http'
// import { setContext } from 'apollo-link-context'

// const httpLink = createHttpLink({
//   uri: 'https://api.github.com/graphql',
// })

// const authLink = setContext((_, { headers }) => {
//   return {
//     headers: {
//       ...headers,
//       authorization: `Bearer ${GITHUB_TOKEN}`,
//     },
//   }
// })

// const gitHubclient = new ApolloClient({
//   link: authLink.concat(httpLink),
// })

const GITHUB_TOKEN = process.env.GATSBY_GITHUB_TOKEN

const gitHubclient = async query => {
  let resp

  try {
    resp = await fetch('https://api.github.com/graphql', {
      method: 'POST',
      body: JSON.stringify({ query }),
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
        repositories(first: 100, isFork: false, orderBy: { field: STARGAZERS, direction: DESC }) {
          nodes {
            id
            name
            description
            url
            issues (states: OPEN) {
              totalCount
            }
            forks {
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

export { getOrganizationMembers, getOrganizationRepos }
