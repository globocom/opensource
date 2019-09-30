import React, { useState, useEffect } from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../components/Layout"
import ProjectList from "../components/ProjectList"
import Project from "../components/Project"
import { Container } from "../styles/grid"

import { getOrgRepos } from "../services/github"

const ProjectsDivider = styled.div`
  height: 1px;
  width: 100%;
  background-color: #ddd;
  margin: 1rem 0 2rem;
`

function Projects() {
  const data = useStaticQuery(graphql`
    query GetFeaturedProjects {
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

  const featuredProjects = data.allFeaturedProjectsJson.edges.map(
    edge => edge.node
  )

  const [projects, setProjects] = useState([])

  useEffect(() => {
    async function getProject() {
      const repositories = await getOrgRepos()
      console.log(repositories[0])
      setProjects(
        repositories.map(repo => {
          return {
            id: repo.id,
            name: repo.name,
            description: repo.description,
            repoURL: repo.url,
            repoNumbers: {
              stars: repo.stargazers.totalCount,
              prs: repo.pullRequests.totalCount,
              issues: repo.issues.totalCount,
              commits: repo.object.history.totalCount,
            },
          }
        })
      )
    }
    getProject()
  }, [])

  return (
    <Layout>
      <Container>
        <ProjectList>
          {featuredProjects.map((project, i) => (
            <Project
              key={project.id}
              isFirst={i === 0}
              isFeatured={true}
              {...project}
            />
          ))}
        </ProjectList>
      </Container>
      <ProjectsDivider />
      <Container>
        <ProjectList>
          {projects.map((project, i) => (
            <Project key={project.id} isFirst={i === 0} {...project} />
          ))}
        </ProjectList>
      </Container>
    </Layout>
  )
}

export default Projects
