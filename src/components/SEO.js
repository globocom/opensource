import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

const SEO = props => {
  const { title, description, url, logos } = props
  const { facebook } = logos

  return (
    <Helmet title={title}>
      <html lang="pt-br" />
      <meta name="description" content={description} />
      <meta name="keywords" content="opensource, community, globocom, gcom" />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={title} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={`${url}/${facebook.url}`} />
      <meta property="og:image:type" content={facebook.type} />
      <meta property="og:image:width" content={facebook.width} />
      <meta property="og:image:height" content={facebook.height} />
    </Helmet>
  )
}

SEO.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  logos: PropTypes.shape({
    facebook: PropTypes.shape({
      type: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
      width: PropTypes.number.isRequired,
      height: PropTypes.number.isRequired,
    }).isRequired,
  }),
}

export default SEO
