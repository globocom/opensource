import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import Header from './header'
import Footer from './footer'

import styles from './layout.module.css'
import siteImage from '../images/app-icon-wide.png'

const MetaData = ({ siteMetadata }) => {
  return (
    <Helmet title={siteMetadata.title}>
      <html lang="pt" />
      <meta name="description" content={siteMetadata.description} />
      <meta name="keywords" content="opensource, community, globocom, gcom" />
      <meta name="og:type" content="website" />
      <meta name="og:site_name" content="Globo.com Open Source" />
      <meta name="og:image" content={siteImage} />
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
