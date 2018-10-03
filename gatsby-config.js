module.exports = {
  siteMetadata: {
    title: 'Globo.com - Open Source',
    description: 'Globo.com - Por que ❤️ Open Source?',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-offline',
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: `src/utils/typography.js`,
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
  ],
}
