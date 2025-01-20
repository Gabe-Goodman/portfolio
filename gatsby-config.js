module.exports = {
  siteMetadata: {
    title: `Gabe Goodman - Portfolio`,
    description: 'Full Stack Developer',
    url: '',
    image: '/image.jpg',
    author: 'Gabe Goodman',
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`, // Needed for dynamic images
    // 'gatsby-source-instance-name-for-remark',
    // `gatsby-remark-source-name`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [`gatsby-remark-responsive-iframe`],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Gabe Goodman - Professional Portfolio`,
        short_name: `Gabe Goodman`,
        start_url: `/`,
        icon: `src/images/logo.png`,
        display: `standalone`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/posts/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `photography`,
        path: 'src/images/photography',
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        // a workaround to solve mdx-remark plugin compat issue
        // https://github.com/gatsbyjs/gatsby/issues/15486
        plugins: [
          `gatsby-remark-images`,
          `gatsby-remark-images-medium-zoom`, // Important!
        ],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
              linkImagesToOriginal: false, // Important!
            },
          },
          {
            resolve: `gatsby-remark-images-medium-zoom`, // Important!
            options: {},
          },
        ],
        extensions: [`.md`, `.mdx`],
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`roboto mono`, `muli\:400,400i,700,700i`],
        display: 'swap',
      },
    },
  ],
};
