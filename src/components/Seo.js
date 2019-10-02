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
          url
          images {
            opengraph {
              type
              url
              width
              height
            }
          }
        }
      }
    }
  `)

  const { siteMetadata } = data.site
  const metaTitle = title
    ? `${title} | ${siteMetadata.title}`
    : siteMetadata.title

  const metaDescription = description || siteMetadata.description

  const {
    images: { opengraph: metaImg },
  } = siteMetadata

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
      name: `author`,
      content: siteMetadata.author,
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
      property: `og:image`,
      content: `${siteMetadata.url}/${metaImg.url}`,
    },
    {
      property: `og:image:type`,
      content: metaImg.type,
    },
    {
      property: `og:image:width`,
      content: metaImg.width,
    },
    {
      property: `og:image:height`,
      content: metaImg.height,
    },
    {
      name: `twitter:card`,
      content: `summary_large_image`,
    },
    {
      name: `twitter:site`,
      content: `@globocom`,
    },
    {
      name: `twitter:title`,
      content: metaTitle,
    },
    {
      name: `twitter:description`,
      content: metaDescription,
    },
    {
      name: `twitter:image`,
      content: `${siteMetadata.url}/${metaImg.url}`,
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
