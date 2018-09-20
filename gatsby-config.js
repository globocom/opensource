module.exports = {
  siteMetadata: {
    title: 'Globo.com - Por que ❤️ Open Source?',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-offline',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Globo.com - Open Source',
        short_name: 'Globo.com Open Source',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/app-icon.png',
      },
    },
  ],
}
