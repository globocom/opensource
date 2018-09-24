import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import Header from './header'

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

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `}
    render={data => (
      <div>
        <MetaData siteMetadata={data.site.siteMetadata} />
        <div className={styles.container}>
          <Header />
          <main>{children}</main>
        </div>
      </div>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
