import React, { useState, useEffect } from "react"
import styled from "styled-components"

import Seo from "@components/Seo"
import Layout, { Container } from "@components/Layout"
import ProjectList from "@components/ProjectList"
import Project from "@components/Project"
import Loading from "@components/Loading"

import { getProjects } from "@services/api"

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
  const [projects, setProjects] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    async function fetchProjects() {
      getProjects().then(projects => {
        setProjects(projects)
        setIsLoading(false)
      })
    }
    fetchProjects()
  }, [])

  return (
    <Layout>
      <Seo
        title="Projetos"
        description="Veja alguns dos projetos Open Source da Globo"
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
