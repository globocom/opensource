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

const GITHUB_TOKEN = process.env.GITHUB_TOKEN

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
    console.error('FAIL TO FETCH', error)
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
            avatarUrl
          }
          totalCount
        }
      }
    }
  `
  return await gitHubclient(query)
}

export { getOrganizationMembers }
