import React, { useEffect, useState } from "react"
import styled, { keyframes } from "styled-components"
import media from "styled-media-query"
import { useStaticQuery, graphql } from "gatsby"

import Seo from "@components/Seo"
import Layout, { Container } from "@components/Layout"
import ProjectList from "@components/ProjectList"
import Project from "@components/Project"
import HacktoberFestCall from "@components/HacktoberFestCall"
import Colors from '@constants/colors'

import ByTheCodeImage from "@images/2020/together-by-the-code.png"
import BGImage from "@images/2020/background.png"
import GirlImage from "@images/2020/girl.png"

import get from "lodash/get"
import { getProjects } from "@services/api"

const blink = keyframes`
  0% {opacity: 0;}
  25% {opacity: .25;}
  50% {opacity: .5;}
  75% {opacity: .75;}
  100% {opacity: 1;}
`

const HeroWrapper = styled.div`
  color: #fff;
  padding-top: 2.3rem;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: bottom center;
  display: flex;
  flex-direction: column-reverse;

  ${media.greaterThan("medium")`
    flex-direction: column;
  `}

  ${media.greaterThan("medium")`
    background-color: transparent;
    background-position: center;
    flex-direction: row;
  `}

  ${media.greaterThan("1680px")`
    background-position-y: -150px;
  `}

  h1 {
    font-weight: bold;
    font-size: 2.25rem;
    margin-bottom: 1.5rem;
    line-height: normal;
    text-align: right;
    color: ${Colors.PRIMARY_COLOR}

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

  i {
    animation: ${blink} 1s linear infinite;
  }

  div.girl img {
    width: calc(100vw - 15vw);
    ${media.greaterThan("medium")`
      width: 100%;
    `}

  }
`

const HeroText = styled.div`
  display: flex;
  ${media.greaterThan("medium")`
    align-items: flex-end;
    flex-direction: column;
  `}

  img {
    width: 100%;
    ${media.greaterThan("medium")`
      width: unset;
      margin-top: -20%;
    `}
  }
`

const ProjectsContainer = styled(Container)`
  margin-bottom: 1rem;

  ${media.greaterThan("medium")`
    margin-bottom: 2.5rem;
  `}
`

function IndexPage() {
  const [projects, setProjects] = useState([])
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
  const featured = data.allFeaturedProjectsJson.edges.map(edge => edge.node)
  useEffect(() => {
    async function populateProjects() {
      const getByName = name => featured.filter(k => k.name === name)[0]
      getProjects().then(projects => {
        projects = projects
          .filter(p => p.featured)
          .map(p => ({
            ...p,
            image: { publicURL: get(getByName(p.name), "image.publicURL") },
          }))
        setProjects(projects)
      })
    }

    populateProjects()
  }, [])

  return (
    <Layout
      backgroundImage={BGImage}
      darkHeader={true}
      darkFooter={true}
      noPadding={true}
    >
      <Seo />
      <Container>
        <HeroWrapper>
          <div className="girl">
            <img src={GirlImage} alt="Index Banner" />
          </div>
          <HeroText data-testid="hero-text">
            <div style={{ flex: 2 }}>
              <h1>Addicted Developers</h1>
            </div>
            <div style={{ flex: 2 }}>
              <img width="100%" src={ByTheCodeImage} alt="By the code" />
            </div>
          </HeroText>
        </HeroWrapper>
      </Container>
      <ProjectsContainer>
        <ProjectList hasShowAll={true}>
          {projects.map((project, i) => (
            <Project
              home
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

export default IndexPage
