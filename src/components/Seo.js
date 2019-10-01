import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"

import { useStaticQuery, graphql } from "gatsby"

function Seo({ lang, title, description, keywords, meta }) {
  const data = useStaticQuery(graphql`
    query SeoQuery {
      site {
        siteMetadata {
          title
          description
          author
        }
      }
    }
  `)

  const { siteMetadata } = data.site
  const metaTitle = title
    ? `${title} | ${siteMetadata.title}`
    : siteMetadata.title

  const metaDescription = description || siteMetadata.description
  const metaTags = [
    {
      name: `description`,
      content: metaDescription,
    },
    {
      name: `keywords`,
      content: keywords.join(`, `),
    },
    {
      property: `og:type`,
      content: `website`,
    },
    {
      property: `og:title`,
      content: metaTitle,
    },
    {
      property: `og:description`,
      content: metaDescription,
    },
    {
      name: `twitter:card`,
      content: `summary`,
    },
    {
      name: `twitter:creator`,
      content: siteMetadata.author,
    },
    {
      name: `twitter:title`,
      content: metaTitle,
    },
    {
      name: `twitter:description`,
      content: metaDescription,
    },
  ].concat(meta)

  return <Helmet htmlAttributes={{ lang }} title={metaTitle} meta={metaTags} />
}

Seo.propTypes = {
  lang: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  keywords: PropTypes.arrayOf(PropTypes.string),
  meta: PropTypes.array,
}

Seo.defaultProps = {
  lang: "pt-br",
  meta: [],
  keywords: ["opensource", "community", "globocom", "gcom"],
}

export default Seo
