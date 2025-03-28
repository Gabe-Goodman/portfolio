exports.createPages = async function ({ actions, graphql }) {
  const { data } = await graphql(`
    query {
      allMdx(sort: { fields: frontmatter___date, order: DESC }) {
        edges {
          node {
            frontmatter {
              slug
            }
            id
          }
        }
      }
    }
  `);

  // Create paginated pages for posts

  const postPerPage = 4;

  const numPages = Math.ceil(data.allMdx.edges.length / postPerPage);

  Array.from({ length: numPages }).forEach((_, i) => {
    actions.createPage({
      path: i === 0 ? `/` : `/${i + 1}`,
      component: require.resolve('./src/templates/allPosts.js'),
      context: {
        limit: postPerPage,
        skip: i * postPerPage,
        numPages,
        currentPage: i + 1,
      },
    });
  });

  // Create single blog post
  data.allMdx.edges.forEach((edge) => {
    const slug = edge.node.frontmatter.slug;
    const id = edge.node.id;
    actions.createPage({
      path: slug,
      component: require.resolve(`./src/templates/singlePost.js`),
      context: { id },
    });
  });
};

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;
  if (node.internal.type === 'MarkdownRemark') {
    const fileNode = getNode(node.parent);
    createNodeField({
      node,
      name: 'sourceName',
      value: fileNode.sourceInstanceName,
    });
  }
};
