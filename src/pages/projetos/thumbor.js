import React from 'react'
import Layout from '../../components/layout'
import TopBackground from '../../components/topBackground'
import Button from '../../components/button'

import styles from './projects.module.css'
import projectLogo from '../../images/logos/logo_thumbor.svg'

const ProjectPage = () => (
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
          <img className={styles.projectLogo} src={projectLogo} alt="Thumbor" />
          <div className={styles.projectRepoInfo}>
            <div>
              <span className={styles.projectStars}>429</span>
              <span className={styles.projectForks}>82</span>
              <span className={styles.projectCommits}>438</span>
              <span className={styles.projectIssues}>13</span>
            </div>
            <div className={styles.projectRepoLinks}>
              <Button
                className={styles.projectRepoLink}
                label="ver repositório"
              />
              <Button className={styles.projectRepoLink} label="documentação" />
            </div>
          </div>
        </div>
        <p className={styles.projectDescription}>
          Thumbor is a smart imaging service. It enables on-demand crop,
          resizing and flipping of images. It features a very smart detection of
          important points in the image for better cropping and resizing, using
          state-of-the-art face and feature detection algorithms (more on that
          in Detection Algorithms). Save time and money in your company with
          Thumbor.
        </p>
        <a className={styles.projectLink} href="http://thumbor.org/">
          http://thumbor.org/
        </a>
      </div>
    </section>
  </Layout>
)

export default ProjectPage
