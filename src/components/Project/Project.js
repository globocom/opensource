import React, { useState } from "react"
import PropTypes from "prop-types"
import styled, { css } from "styled-components"
import media from "styled-media-query"

import iconExpandLess from "@images/icons/expand-less.svg"
import iconExpandMore from "@images/icons/expand-more.svg"

import starsIcon from "@images/icons/stars"
import iconCommits from "@images/icons/commits"
import iconPrs from "@images/icons/prs"
import iconIssues from "@images/icons/issues"

import Colors from "@constants/colors"

import BracketImage from "@images/2020/open-bracket.svg"

const REPOSITORY_COUNT_ICONS = {
  stars: home => () => starsIcon(home),
  commits: home => () => iconCommits(home),
  prs: home => () => iconPrs(home),
  issues: home => () => iconIssues(home),
}

const ProjectWrapper = styled.div`
  display: flex;
  flex-direction: column;
  ${props =>
    !props.isFeatured &&
    css`
      margin-bottom: 1.7rem;
      border-bottom: 1px solid ${Colors.PRIMARY_COLOR};
    `}
`

const ProjectDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  ${props =>
    !props.isFeatured &&
    `
    align-items: flex-start;
  `}
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
    ${props =>
      props.isFeatured &&
      `
      display: inherit;
    `}
  `}
`

const ProjectName = styled.h2`
  flex: 1;
  font-size: 1.6rem;
  font-weight: bold;
  color: ${props => (props.home ? "#fff" : "#000")};
  display: flex;
  justify-content: center;
  align-items: center;
  ${media.greaterThan("medium")`
    height: 80px;
  `}
`

const ProjectDescription = styled.p`
  padding: 1.5rem 0;
  line-height: 1.25;
  color: ${props => (props.home ? "#fff" : "#000")};
  letter-spacing: 0.4px;
  text-align: ${props => (!props.isFeatured ? "left" : "center")};
`

const ProjectWebSite = styled.a`
  display: block;
  text-align: center;
  color: ${Colors.PRIMARY_COLOR};
  font-weight: bold;
  &:hover {
    text-decoration: underline;
  }
`

const ProjectLinks = styled.div`
  padding: 1.5rem 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  ${props =>
    !props.isFeatured &&
    `
    width: 100%;
    justify-content: space-between;
  `}
`

const ProjectLink = styled.a`
  font-weight: bold;
  color: ${props => (props.home ? "#fff" : "#000")};
  padding: ${props => (props.home ? "0px 10px" : "0px")};
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
  ${props =>
    props.open
      ? css`
          background-image: url(${iconExpandLess});
        `
      : css`
          background-image: url(${iconExpandMore});
        `}
  ${media.greaterThan("medium")`
    display: none;
  `}
`

const ImageWrapper = styled.div`
  text-align: center;
  flex: 1;
`

const RepoInfo = styled.div`
  padding: 1.5rem 0 1rem;
  display: flex;
  justify-content: space-between;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: ${props => (props.home ? "0px" : "35px")};
`

const RepoCounterWrapper = styled.div`
  color: #757575;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

const RepoCounterIcon = styled.i`
  width: 30px;
  height: 20px;
  display: inline-block;
  background-position: center;
  margin-bottom: 10px;
  text-align: center;
`

const Bracket = styled.img`
  transform: scaleX(${props => (props.inverted ? -1 : 1)});
  width: ${props => (props.width ? props.width : "26px")};
`

const StyledBracketWrapper = styled.div`
  display: flex;
  align-items: center;
`

const BracketWrapper = props => {
  return (
    <StyledBracketWrapper style={{ ...props.style }}>
      {props.home && <Bracket src={BracketImage} width={props.width} />}
      {props.children}
      {props.home && (
        <Bracket src={BracketImage} width={props.width} inverted />
      )}
    </StyledBracketWrapper>
  )
}

function RepoCounter({ name, count, home }) {
  const Icon = REPOSITORY_COUNT_ICONS[name](home)

  return (
    <RepoCounterWrapper>
      <RepoCounterIcon>
        <Icon />
      </RepoCounterIcon>
      <span style={{ color: home ? "#fff" : "unset" }}>
        {count === undefined ? "00000" : count}
      </span>
    </RepoCounterWrapper>
  )
}

RepoCounter.propTypes = {
  name: PropTypes.string.isRequired,
  count: PropTypes.number,
}

function Project(props) {
  const {
    name,
    image,
    siteURL,
    repoURL = "//",
    docsURL,
    shortDescription,
    description,
    isFirst,
    isFeatured,
    repoNumbers,
    home,
  } = props

  const [open, setOpen] = useState(isFirst)
  const repoCounters = repoNumbers

  function handleToggleOpen() {
    setOpen(!open)
  }

  return (
    <ProjectWrapper isFeatured={isFeatured}>
      <Nav onClick={handleToggleOpen}>
        {image.publicURL ? (
          <ImageWrapper>
            <img style={{ maxWidth: 218 }} src={image.publicURL} alt={name} />
          </ImageWrapper>
        ) : (
          <ProjectName home={home}>{name}</ProjectName>
        )}
        <NavButton open={open} />
      </Nav>
      {repoNumbers && (
        <RepoInfo home={home}>
          <BracketWrapper
            home={home}
            style={{ width: "100%", "justify-content": "space-around" }}
          >
            <RepoCounter name="stars" count={repoCounters.stars} home={home} />
            <RepoCounter
              name="commits"
              count={repoCounters.commits}
              home={home}
            />
            <RepoCounter name="prs" count={repoCounters.prs} home={home} />
            <RepoCounter
              name="issues"
              count={repoCounters.issues}
              home={home}
            />
          </BracketWrapper>
        </RepoInfo>
      )}

      <ProjectDetails
        isFeatured={isFeatured}
        home={home}
        open={!isFeatured ? true : open}
      >
        {(shortDescription || description) && (
          <ProjectDescription isFeatured={isFeatured} home={home}>
            {shortDescription || description}
          </ProjectDescription>
        )}

        {siteURL && (
          <ProjectWebSite
            href={siteURL}
            target="_blank"
            rel="noopener noreferrer"
          >
            {siteURL}
          </ProjectWebSite>
        )}
        <ProjectLinks isFeatured={isFeatured}>
          {repoURL && (
            <BracketWrapper width="10px" home={home}>
              <ProjectLink
                home={home}
                href={repoURL}
                target="_blank"
                rel="noopener noreferrer"
              >
                {isFeatured ? "Repositório" : "Ver repositório"}
              </ProjectLink>
            </BracketWrapper>
          )}
          {docsURL && (
            <BracketWrapper width="10px" home={home}>
              <ProjectLink
                home={home}
                href={docsURL}
                target="_blank"
                rel="noopener noreferrer"
              >
                Documentação
              </ProjectLink>
            </BracketWrapper>
          )}
        </ProjectLinks>
      </ProjectDetails>
    </ProjectWrapper>
  )
}

Project.propTypes = {
  isFirst: PropTypes.bool.isRequired,
  isFeatured: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.object,
  repoURL: PropTypes.string.isRequired,
  siteURL: PropTypes.string,
  docsURL: PropTypes.string,
  shortDescription: PropTypes.string,
  description: PropTypes.string,
  repoNumbers: PropTypes.object,
  home: PropTypes.bool,
}

Project.defaultProps = {
  isFirst: false,
  isFeatured: false,
}

export default Project
