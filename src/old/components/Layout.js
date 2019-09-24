import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { StaticQuery, graphql } from 'gatsby'

import Header from './Header'
import Footer from './Footer'
import SEO from './SEO'
import styles from './Layout.module.css'

const siteQuery = graphql`
  query SiteQuery {
    site {
      siteMetadata {
        title
        description
        url
        logos {
          facebook {
            type
            url
            width
            height
          }
        }
      }
    }
  }
`

const Layout = props => {
  const { children, renderTop, renderBottom, mainTransparent } = props

  return (
    <StaticQuery
      query={siteQuery}
      render={data => (
        <div className={styles.layout}>
          <SEO {...data.site.siteMetadata} />
          <div className={styles.layoutTop}>
            <Header />
            {renderTop && renderTop()}
          </div>
          <div
            className={cx({
              [styles.mainTransparent]: mainTransparent,
              [styles.main]: !mainTransparent,
            })}
          >
            {children}
          </div>
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
  renderTop: PropTypes.func,
  renderBottom: PropTypes.func,
  mainTransparent: PropTypes.bool,
}

Layout.defaultProps = {
  mainTransparent: false,
}

export default Layout
