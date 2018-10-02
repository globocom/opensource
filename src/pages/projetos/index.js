import React, { Component } from 'react'
import Layout from '../../components/layout'
import TopBackground from '../../components/topBackground'
import Button from '../../components/button'
import FeaturedProjects from '../../components/featuredProjects'
import featuredProjects from '../../data/featuredProjects'

import { getOrganizationRepos } from '../../services/github'

import styles from './projects.module.css'
import githubIcon from '../../images/logo-github.svg'

class ProjetosPage extends Component {
  state = {
    projects: [],
  }

  async componentDidMount() {
    const data = await getOrganizationRepos()
    if (data) {
      this.setState({
        projects: data.organization.repositories.nodes,
      })
    }
  }

  render() {
    const { projects } = this.state
    return (
      <Layout renderTop={() => <TopBackground skyObject="rocket" />}>
        <section className={styles.section}>
          <h1 className={styles.head}>Nossos Projetos</h1>
          <div className={styles.body}>
            <FeaturedProjects projects={featuredProjects} />
            <div className={styles.projects}>
              {projects.map(project => (
                <div key={project.id} className={styles.project}>
                  <div className={styles.projectTitle}>{project.name}</div>
                  <div className={styles.projectDescription}>
                    {project.description}
                  </div>
                  <a className={styles.projectLink} href={project.url}>
                    ver detalhes
                  </a>
                </div>
              ))}
            </div>
            <Button
              url="https://github.com/globocom/opensource"
              className={styles.button}
              label="ver todos"
              icon={githubIcon}
            />
          </div>
        </section>
      </Layout>
    )
  }
}
export default ProjetosPage
