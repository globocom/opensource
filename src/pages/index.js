import React from "react"
import styled from "styled-components"
import media from "styled-media-query"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../components/Layout"
import ProjectList from "../components/ProjectList"
import Project from "../components/Project"
import { Container } from "../styles/grid"

import bgImageTopSm from "../images/astrunaut-front-sm.jpg"
import bgImageTopLg from "../images/astrunaut-front-lg.jpg"

const HeroWrapper = styled.div`
  color: #fff;
  background-color: #000;
  padding-top: 2.3rem;
  height: 43rem;
  background-image: url(${bgImageTopSm});
  background-size: contain;
  background-repeat: no-repeat;
  background-position-x: center;
  background-position-y: bottom;

  ${media.greaterThan("medium")`
    height: 62rem;
    background-size: cover;
    background-color: transparent;
    background-image: url(${bgImageTopLg});
    background-position-x: -175px;
    background-position-y: -124px;
  `}

  ${media.greaterThan("large")`
    height: 60rem;
    background-position-x: center;
    background-position-y: -130px;
  `}

  ${media.greaterThan("huge")`
    height: 95rem;
    background-position-y: -200px;
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

function Index() {
  const data = useStaticQuery(graphql`
    query GetFeaturedProjects {
      allFeaturedProjectsJson {
        edges {
          node {
            id
            name
            slug
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
      <HeroWrapper>
        <Container>
          <HeroText>
            <h1>Addicted Developers</h1>
            <span>unidos pelo código_</span>
          </HeroText>
        </Container>
      </HeroWrapper>
      <Container>
        <ProjectList hasShowAll={true}>
          {projects.map((project, i) => (
            <Project key={project.id} isFirst={i === 0} {...project} />
          ))}
        </ProjectList>
      </Container>
    </Layout>
  )
}

export default Index
