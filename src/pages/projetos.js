import React, { Component } from 'react'
import Layout from '../components/layout'
import TopBackground from '../components/top-background'
import Button from '../components/button'
import FeaturedProjects from '../components/featured-projects'
import RepoStats from '../components/repo-stats'
import Spinner from '../components/spinner'
import { getOrgRepos } from '../services/github'

import styles from './projetos.module.css'
import githubIcon from '../images/logo-github.svg'

const Repo = ({ repo }) => (
  <div className={styles.project}>
    <a href={repo.url} className={styles.projectTitle}>
      {repo.name}
    </a>
    <RepoStats
      className={styles.projectStats}
      stars={repo.stargazers.totalCount}
      pullRequests={repo.pullRequests.totalCount}
      commits={repo.object ? repo.object.history.totalCount : null}
      issues={repo.issues.totalCount}
    />
    <div className={styles.projectDescription}>{repo.description}</div>
    <a className={styles.projectLink} href={repo.url} target="_blank" rel="noopenner noreferrer">
      ver detalhes
    </a>
  </div>
)

class ProjetosPage extends Component {
  state = {
    repos: [],
    isLoading: true,
  }

  async componentDidMount() {
    const repos = await getOrgRepos()
    this.setState({ repos, isLoading: false })
  }

  render() {
    const { repos, isLoading } = this.state
    return (
      <Layout renderTop={() => <TopBackground skyObject="rocket" />}>
        <section className={styles.section}>
          <h1 className={styles.head}>Nossos Projetos</h1>
          <div className={styles.body}>
            <FeaturedProjects />
            {isLoading && <Spinner message="Carregando projetos ..." />}
            <div className={styles.projects}>
              {repos.map(repo => (
                <Repo key={`repo-${repo.id}`} repo={repo} />
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
