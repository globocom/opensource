import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import styled, { css } from "styled-components"
import media from "styled-media-query"

import iconExpandLess from "../images/icons/expand-less.svg"
import iconExpandMore from "../images/icons/expand-more.svg"

import iconStars from "../images/icons/stars.svg"
import iconCommits from "../images/icons/commits.svg"
import iconPrs from "../images/icons/prs.svg"
import iconIssues from "../images/icons/issues.svg"

import { getRepoStats } from "../services/github"

const REPOSITORY_COUNT_ICONS = {
  stars: iconStars,
  commits: iconCommits,
  prs: iconPrs,
  issues: iconIssues,
}

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

  ${media.greaterThan("medium")`
    visibility: visible;
    display: unset;
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

  ${media.greaterThan("medium")`
    padding: 1.5rem 0;
    height: 80px;
  `}
`

const NavButton = styled.i`
  width: 24px;
  height: 24px;
  background-image: url(${props =>
    props.open ? iconExpandLess : iconExpandMore});

  ${media.greaterThan("medium")`
    display: none;
  `}
`

const ImageWrapper = styled.div`
  text-align: center;
  flex: 1;
`

const RepositoryInfo = styled.div`
  padding: 1.5rem 0 1rem;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 35px;
`

const RepositoryCounterWrapper = styled.div`
  color: #757575;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

const RepositoryCounterIcon = styled.i`
  width: 30px;
  height: 20px;
  display: inline-block;
  background-image: url(${props => REPOSITORY_COUNT_ICONS[props.name]});
  background-repeat: no-repeat;
  background-position: center;
  margin-bottom: 10px;
`

function RepositoryCounter({ name, count }) {
  return (
    <RepositoryCounterWrapper>
      <RepositoryCounterIcon name={name} />
      <span>{count || "00000"}</span>
    </RepositoryCounterWrapper>
  )
}

function Project(props) {
  const {
    isFirst,
    name,
    owner,
    slug,
    image,
    siteURL,
    repoURL,
    docsURL,
    shortDescription,
    description,
  } = props

  const [open, setOpen] = useState(isFirst)
  const [repoCounters, setRepoCounters] = useState({})

  function handleToggleOpen() {
    setOpen(!open)
  }

  useEffect(() => {
    async function fetchRepoCounter() {
      const stats = await getRepoStats(owner, slug)
      if (!stats) return

      const { repository } = stats
      setRepoCounters({
        stars: repository.stargazers.totalCount,
        prs: repository.pullRequests.totalCount,
        commits: repository.object.history.totalCount,
        issues: repository.issues.totalCount,
      })
    }
    fetchRepoCounter()
  }, [owner, slug])

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
        <RepositoryInfo>
          <RepositoryCounter
            name="stars"
            count={repoCounters.stars}
          ></RepositoryCounter>
          <RepositoryCounter
            name="commits"
            count={repoCounters.commits}
          ></RepositoryCounter>
          <RepositoryCounter
            name="prs"
            count={repoCounters.prs}
          ></RepositoryCounter>
          <RepositoryCounter
            name="issues"
            count={repoCounters.issues}
          ></RepositoryCounter>
        </RepositoryInfo>
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
