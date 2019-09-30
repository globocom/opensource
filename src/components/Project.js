import React, { useState } from "react"
import PropTypes from "prop-types"
import styled, { css } from "styled-components"

import iconExpandLess from "../images/icons/expand-less.svg"
import iconExpandMore from "../images/icons/expand-more.svg"

const ProjectWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

const ProjectDetails = styled.div`
  transition: visibility 225ms;

  ${props =>
    !props.open
      ? css`
          display: none;
          visibility: hidden;
        `
      : css`
          visibility: visible;
        `}
`

const ProjectDescription = styled.p`
  padding: 1.5rem 0;
  line-height: 1.25;
  letter-spacing: 0.4px;
`

const ProjectWebSite = styled.a`
  padding: 1.5rem 0;
  color: #59b8fd;
  font-weight: bold;
`

const ProjectLinks = styled.div`
  padding: 1.5rem 0;
  display: flex;
  align-items: center;
`

const ProjectLink = styled.a`
  font-weight: bold;
  margin-right: 2.5rem;
`

const Nav = styled.div`
  padding: 20px 0;
  padding-left: 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const NavButton = styled.i`
  width: 24px;
  height: 24px;
  background-image: url(${props =>
    props.open ? iconExpandLess : iconExpandMore});
`

const ImageWrapper = styled.div`
  text-align: center;
  flex: 1;
`

function Project(props) {
  const {
    isFirst,
    name,
    image,
    siteURL,
    repoURL,
    docsURL,
    shortDescription,
    description,
  } = props

  const [open, setOpen] = useState(isFirst)

  function handleToggleOpen() {
    setOpen(!open)
  }

  return (
    <ProjectWrapper>
      {image ? (
        <Nav onClick={handleToggleOpen}>
          <ImageWrapper>
            <img src={image.publicURL} alt={name} />
          </ImageWrapper>
          <NavButton open={open} />
        </Nav>
      ) : (
        <h2>{name}</h2>
      )}
      <ProjectDetails open={open}>
        <ProjectDescription>
          {shortDescription || description}
        </ProjectDescription>
        {siteURL && (
          <ProjectWebSite
            href={siteURL}
            target="_blank"
            rel="noopener noreferrer"
          >
            {siteURL}
          </ProjectWebSite>
        )}
        <ProjectLinks>
          {repoURL && (
            <ProjectLink
              href={repoURL}
              target="_blank"
              rel="noopener noreferrer"
            >
              Repositório
            </ProjectLink>
          )}
          {docsURL && (
            <ProjectLink
              href={docsURL}
              target="_blank"
              rel="noopener noreferrer"
            >
              Documentação
            </ProjectLink>
          )}
        </ProjectLinks>
      </ProjectDetails>
    </ProjectWrapper>
  )
}

Project.propTypes = {
  isFirst: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.object,
  repoURL: PropTypes.string.isRequired,
  siteURL: PropTypes.string,
  docsURL: PropTypes.string,
  shortDescription: PropTypes.string,
  description: PropTypes.string,
}

Project.defaultProps = {
  isFirst: false,
}

export default Project
