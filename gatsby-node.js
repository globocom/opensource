// const path = require(`path`)

// exports.createPages = ({ graphql, actions }) => {
//   const { createPage } = actions
//   return new Promise((resolve, reject) => {
//     graphql(`
//       {
//         allFeaturedProjectsJson {
//           edges {
//             node {
//               slug
//             }
//           }
//         }
//       }
//     `).then(result => {
//       result.data.allFeaturedProjectsJson.edges.forEach(({ node }) => {
//         createPage({
//           path: `projetos/${node.slug}`,
//           component: path.resolve('./src/templates/project.js'),
//           context: {
//             slug: node.slug,
//           },
//         })
//       })
//       resolve()
//     })
//   })
// }
