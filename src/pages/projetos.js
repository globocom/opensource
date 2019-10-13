import React, { useState, useEffect } from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"

import Seo from "../components/Seo"
import Layout, { Container } from "../components/Layout"
import ProjectList from "../components/ProjectList"
import Project from "../components/Project"
import Loading from "../components/Loading"

import { getOrgRepos } from "../services/github"

const Divider = styled.div`
  height: 1px;
  width: 100%;
  background-color: #ddd;
  margin: 1rem 0 2rem;
`

const ProjectsLoading = styled.div`
  padding-top: 2rem;
  display: flex;
  justify-content: center;
  height: 400px;
`

function ProjectsPage() {
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
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    async function getProject() {
      setIsLoading(true)

      const repositories = await getOrgRepos()
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

      setIsLoading(false)
    }

    getProject()
  }, [])

  return (
    <Layout>
      <Seo
        title="Projetos"
        description="Veja alguns dos projetos Open Source da Globo.com"
      />
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
      <Divider />
      <Container>
        {isLoading ? (
          <ProjectsLoading>
            <Loading>carregando projetos</Loading>
          </ProjectsLoading>
        ) : (
          <ProjectList>
            {projects.map((project, i) => (
              <Project key={project.id} isFirst={i === 0} {...project} />
            ))}
          </ProjectList>
        )}
      </Container>
    </Layout>
  )
}

export default ProjectsPage
