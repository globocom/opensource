import React, { Component } from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import TopBackground from '../components/top-background'
import Button from '../components/button'
import RepoStats from '../components/repo-stats'

import { getRepoStats } from '../services/github'

import styles from './project.module.css'

export default class ProjectTemplate extends Component {
  state = {
    stats: {
      stars: '---',
      pullRequests: '---',
      commits: '---',
      issues: '---',
    },
  }

  async componentDidMount() {
    const { owner, slug } = this.props.data.featuredProjectsJson
    const stats = await getRepoStats(owner, slug)
    if (stats) {
      console.log(owner, slug, stats)
      const { repository } = stats
      this.setState({
        stats: {
          stars: repository.stargazers.totalCount,
          pullRequests: repository.pullRequests.totalCount,
          commits: repository.object.history.totalCount,
          issues: repository.issues.totalCount,
        },
      })
    }
  }

  render() {
    const { stats } = this.state
    const {
      name,
      shortDescription,
      description,
      image,
      repoURL,
      siteURL,
      docsURL,
    } = this.props.data.featuredProjectsJson

    return (
      <Layout
        renderTop={() => <TopBackground skyObject="rocket" />}
        renderBottom={() => (
          <div className={styles.sectionBottom}>
            <div className={styles.astronaut} />
          </div>
        )}
      >
        <section className={styles.section}>
          <div>
            <div className={styles.projectInfoTop}>
              <img
                className={styles.projectLogo}
                src={image.publicURL}
                alt={name}
              />
              <div className={styles.projectRepoInfo}>
                <RepoStats
                  stars={stats.stars}
                  pullRequests={stats.pullRequests}
                  commits={stats.commits}
                  issues={stats.issues}
                />
                <div className={styles.projectRepoLinks}>
                  <Button
                    className={styles.projectRepoLink}
                    label="ver repositório"
                    url={repoURL}
                    blank={true}
                  />
                  <Button
                    className={styles.projectRepoLink}
                    label="documentação"
                    url={docsURL}
                    blank={true}
                  />
                </div>
              </div>
            </div>
            <p className={styles.projectDescription}>
              {description || shortDescription}
            </p>
            <a
              className={styles.projectLink}
              href={siteURL}
              target="_blank"
              rel="noopener noreferrer"
            >
              {siteURL}
            </a>
          </div>
        </section>
      </Layout>
    )
  }
}

export const query = graphql`
  query($slug: String!) {
    featuredProjectsJson(slug: { eq: $slug }) {
      id
      name
      owner
      slug
      shortDescription
      description
      repoURL
      siteURL
      docsURL
      image {
        publicURL
      }
    }
  }
`
