import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import TopBackground from '../components/topBackground'
import Button from '../components/button'
import RepoStats from '../components/repoStats'

import styles from './project.module.css'

export default ({ data: { featuredProjectsJson } }) => {
  const {
    name,
    shortDescription,
    description,
    image,
    repoURL,
    siteURL,
    docsURL,
  } = featuredProjectsJson
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
                stars={429}
                pullRequests={82}
                commits={438}
                issues={13}
              />
              <div className={styles.projectRepoLinks}>
                <Button
                  className={styles.projectRepoLink}
                  label="ver repositório"
                  url={repoURL}
                />
                <Button
                  className={styles.projectRepoLink}
                  label="documentação"
                  url={docsURL}
                />
              </div>
            </div>
          </div>
          <p className={styles.projectDescription}>
            {description || shortDescription}
          </p>
          <a className={styles.projectLink} href={siteURL}>
            {siteURL}
          </a>
        </div>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    featuredProjectsJson(slug: { eq: $slug }) {
      id
      name
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
