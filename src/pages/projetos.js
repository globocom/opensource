import React, { Component } from 'react'
import Layout from '../components/layout'
import TopBackground from '../components/top-background'
import Button from '../components/button'
import FeaturedProjects from '../components/featured-projects'
import RepoStats from '../components/repo-stats'

import { getOrganizationRepos } from '../services/github'

import styles from './projetos.module.css'
import githubIcon from '../images/logo-github.svg'

class ProjetosPage extends Component {
  state = {
    repos: [],
  }

  async componentDidMount() {
    const repos = await getOrganizationRepos()
    this.setState({ repos })
  }

  render() {
    const { repos } = this.state
    return (
      <Layout renderTop={() => <TopBackground skyObject="rocket" />}>
        <section className={styles.section}>
          <h1 className={styles.head}>Nossos Projetos</h1>
          <div className={styles.body}>
            <FeaturedProjects />
            <div className={styles.projects}>
              {repos.map(repo => (
                <div key={repo.id} className={styles.project}>
                  <a href={repo.url} className={styles.projectTitle}>
                    {repo.name}
                  </a>
                  <RepoStats
                    className={styles.projectStats}
                    stars={repo.stargazers.totalCount}
                    pullRequests={repo.pullRequests.totalCount}
                    commits={
                      repo.object ? repo.object.history.totalCount : null
                    }
                    issues={repo.issues.totalCount}
                  />
                  <div className={styles.projectDescription}>
                    {repo.description}
                  </div>
                  <a className={styles.projectLink} href={repo.url}>
                    ver detalhes
                  </a>
                </div>
              ))}
            </div>
            <Button
              url="https://github.com/globocom"
              className={styles.button}
              label="ver repositórios"
              icon={githubIcon}
            />
          </div>
        </section>
      </Layout>
    )
  }
}

export default ProjetosPage
