const path = require(`path`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const result = await graphql(`
    query {
      allStrapiExperience {
        nodes {
          slug
        }
      }
    }
  `)
  const templatePath = path.resolve(`./src/pages/templates/experience-template.js`)
  
  result.data.allStrapiExperience.nodes.forEach((node) => {
    createPage({
      path: `experiences/${node.slug}`,
      component: templatePath,
      context: {
        slug: node.slug,
      },
    })
  })
}