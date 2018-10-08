module.exports = {
  siteMetadata: {
    title: 'Globo.com - Open Source',
    description: 'Globo.com - Por que ❤️ Open Source?',
    url: 'https://opensource.globo.com',
    logos: {
      fb: 'logos/fb.png',
    },
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-json',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/utils/typography.js',
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Globo.com - Open Source',
        short_name: 'Globocom OpenSource',
        start_url: '/',
        background_color: '#1B3556',
        theme_color: '#1B3556',
        display: 'minimal-ui',
        icon: 'src/images/app-icon.png',
      },
    },
    // {
    //   resolve: 'gatsby-plugin-offline',
    //   options: {
    //     runtimeCaching: [
    //       {
    //         urlPattern: /\/callback\//,
    //         handler: `networkOnly`,
    //       },
    //       {
    //         urlPattern: /\.(?:png|jpg|jpeg|webp|svg|gif|tiff|js|woff|woff2|json|css)$/,
    //         handler: `staleWhileRevalidate`,
    //       },
    //     ],
    //   },
    // },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: './src/data/',
      },
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-35544505-1',
      },
    },
  ],
}
