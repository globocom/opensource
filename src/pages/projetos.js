import React, { useState, useEffect } from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"

import Seo from "../components/Seo"
import Layout, { Container } from "../components/Layout"
import ProjectList from "../components/ProjectList"
import Project from "../components/Project"
import Loading from "../components/Loading"

import { getEdition } from "../services/api"
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

const cache = {}

function ProjectsPage() {
  const [projects, setProjects] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    async function getProject() {
      setIsLoading(true)
      const { projects } = (await getEdition()) || {}
      const repositories = await getOrgRepos()

      repositories.forEach(repo => (cache[repo.url] = repo))
      setProjects(
        projects
          .filter(project => cache[project.repositoryUrl])
          .map(project => {
            const repo = cache[project.repositoryUrl]

            return {
              id: project.id,
              name: project.name,
              shortDescription: project.description,
              featured: project.featured,
              repoURL: project.repositoryUrl,
              siteURL: project.website,
              docsURL: project.website,
              image: {
                publicURL: project.imageUrl,
              },
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
          {projects
            .filter(project => project.featured)
            .filter(Boolean)
            .map((project, i) => (
              <Project
                key={i}
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
            {projects
              .filter(project => !project.featured)
              .filter(Boolean)
              .map((project, i) => (
                <Project key={project.id} isFirst={i === 0} {...project} />
              ))}
          </ProjectList>
        )}
      </Container>
    </Layout>
  )
}

export default ProjectsPage
