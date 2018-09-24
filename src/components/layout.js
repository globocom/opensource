import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import Header from './header'
import Footer from './footer'

import styles from './layout.module.css'

const MetaData = ({ siteMetadata }) => {
  const meta = [
    {
      name: 'description',
      content: siteMetadata.description,
    },
    {
      name: 'keywords',
      content: 'opensource, community, globocom, gcom',
    },
  ]
  return (
    <Helmet title={siteMetadata.title} meta={meta}>
      <html lang="pt" />
    </Helmet>
  )
}

MetaData.propTypes = {
  siteMetadata: PropTypes.object.isRequired,
}

const siteQuery = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`

const Layout = ({ children }) => (
  <StaticQuery
    query={siteQuery}
    render={data => (
      <div className={styles.layout}>
        <MetaData siteMetadata={data.site.siteMetadata} />
        <Header />
        <main className={styles.main}>{children}</main>
        <Footer />
      </div>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
