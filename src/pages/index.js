import React from "react"
import styled from "styled-components"
import media from "styled-media-query"
import { useStaticQuery, graphql } from "gatsby"

import Seo from "../components/Seo"
import Layout from "../components/Layout"
import ProjectList from "../components/ProjectList"
import Project from "../components/Project"
import HacktoberFestCall from "../components/HacktoberFestCall"
import { Container } from "../styles/grid"

import bgImageTopSm from "../images/astrunaut-front-sm.jpg"
import bgImageTopLg from "../images/astrunaut-front-lg.jpg"

const HeroWrapper = styled.div`
  color: #fff;
  background-color: #000;
  padding-top: 2.3rem;
  height: 688px;
  background-image: url(${bgImageTopSm});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: bottom center;

  ${media.greaterThan("medium")`
    background-image: url(${bgImageTopLg});
    background-size: cover;
    background-position: left;
    height: 608px;
  `}

  ${media.greaterThan("large")`
    height: 880px;
    background-color: transparent;
    background-position: center;
  `}

  ${media.greaterThan("1680px")`
    height: 1580px;
    background-position-y: -150px;
  `}

  h1 {
    font-weight: bold;
    font-size: 2.25rem;
    margin-bottom: 1.5rem;
    line-height: normal;

    ${media.greaterThan("medium")`
      font-size: 3.75rem;
    `}
  }

  span {
    font-family: Hack, monospace;

    ${media.greaterThan("medium")`
      font-size: 1.75rem;
    `}
  }
`

const HeroText = styled.div`
  ${media.greaterThan("medium")`
    width: 26.75rem;
    padding-top: 66px;
  `}

  ${media.greaterThan("large")`
    padding-top: 130px;
  `}
`

const ProjectsContainer = styled(Container)`
  margin-bottom: 1rem;

  ${media.greaterThan("medium")`
    margin-bottom: 2.5rem;
  `}
`

function Index() {
  const data = useStaticQuery(graphql`
    query GetFeaturedProjectsHome {
      allFeaturedProjectsJson {
        edges {
          node {
            id
            name
            slug
            owner
            repoURL
            siteURL
            docsURL
            description
            shortDescription
            image {
              publicURL
            }
          }
        }
      }
    }
  `)

  const projects = data.allFeaturedProjectsJson.edges.map(edge => edge.node)

  return (
    <Layout darkHeader={true} darkFooter={false} noPadding={true}>
      <Seo />
      <HeroWrapper>
        <Container>
          <HeroText data-testid="hero-text">
            <h1>Addicted Developers</h1>
            <span>unidos pelo código_</span>
          </HeroText>
        </Container>
      </HeroWrapper>
      <ProjectsContainer>
        <ProjectList hasShowAll={true}>
          {projects.map((project, i) => (
            <Project
              key={project.id}
              isFirst={i === 0}
              isFeatured={true}
              {...project}
            />
          ))}
        </ProjectList>
      </ProjectsContainer>
      <HacktoberFestCall isCallOnly={true} />
    </Layout>
  )
}

export default Index
