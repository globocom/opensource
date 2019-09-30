import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

const ProjectWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

function Project(props) {
  const {
    name,
    owner,
    slug,
    image,
    repoURL,
    siteURL,
    docsURL,
    shortDescription,
    description,
  } = props

  return (
    <ProjectWrapper>
      {image ? (
        <div>
          <img src={image} alt={name} />
        </div>
      ) : (
        <h2>{name}</h2>
      )}
    </ProjectWrapper>
  )
}

Layout.propTypes = {
  name: PropTypes.string.isRequired,
  owner: PropTypes.string.isRequired,
  slug: PropTypes.string,
  image: PropTypes.string.isRequired,
  repoURL: PropTypes.string.isRequired,
  siteURL: PropTypes.string,
  docsURL: PropTypes.string,
  shortDescription: PropTypes.string,
  description: PropTypes.string,
}

export default Project
