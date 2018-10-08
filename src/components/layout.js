import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import Header from './header'
import Footer from './footer'

import styles from './layout.module.css'

const MetaData = ({ siteMetadata }) => {
  return (
    <Helmet title={siteMetadata.title}>
      <html lang="pt" />
      <meta name="description" content={siteMetadata.description} />
      <meta name="keywords" content="opensource, community, globocom, gcom" />
      <meta name="og:type" content="website" />
      <meta name="og:site_name" content={siteMetadata.title} />
      <meta name="og:url" content={siteMetadata.url} />
      <meta name="og:title" content={siteMetadata.title} />
      <meta name="og:description" content={siteMetadata.description} />
      <meta
        name="og:image"
        content={`${siteMetadata.url}/${siteMetadata.logos.fb}`}
      />
      <meta property="og:image:type" content="image/png" />
      <meta property="og:image:width" content="1208" />
      <meta property="og:image:height" content="638" />
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
        url
        logos {
          fb
        }
      }
    }
  }
`

const Layout = ({
  children,
  renderTop,
  renderBottom,
  mainTransparent = false,
}) => {
  const mainClassName = mainTransparent ? styles.mainTransparent : styles.main
  return (
    <StaticQuery
      query={siteQuery}
      render={data => (
        <div className={styles.layout}>
          <MetaData siteMetadata={data.site.siteMetadata} />
          <div className={styles.layoutTop}>
            <Header />
            {renderTop && renderTop()}
          </div>
          <div className={mainClassName}>{children}</div>
          <div className={styles.layoutBottom}>
            <Footer />
            {renderBottom && renderBottom()}
          </div>
        </div>
      )}
    />
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
