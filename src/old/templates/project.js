import React, { Component } from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import TopBackground from "../components/TopBackground"
import Button from "../components/Button"
import RepoStats from "../components/RepoStats"

import { getRepoStats } from "../services/github"

import styles from "./project.module.css"

export default class ProjectTemplate extends Component {
  state = {
    stats: {
      stars: "---",
      pullRequests: "---",
      commits: "---",
      issues: "---",
    },
  }

  async componentDidMount() {
    const { owner, slug } = this.props.data.featuredProjectsJson
    const stats = await getRepoStats(owner, slug)
    if (stats) {
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
          <div className={styles.project}>
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
                    url={repoURL}
                    blank={true}
                  >
                    Ver repositório
                  </Button>
                  <Button
                    className={styles.projectRepoLink}
                    url={docsURL}
                    blank={true}
                  >
                    documentação
                  </Button>
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
