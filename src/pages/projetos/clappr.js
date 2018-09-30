import React from 'react'
import Layout from '../../components/layout'
import TopBackground from '../../components/topBackground'
import Button from '../../components/button'

import styles from './projects.module.css'
import projectLogo from '../../images/logos/logo_clappr.svg'

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
          <img className={styles.projectLogo} src={projectLogo} alt="Clappr" />
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
          Megradraft is a Rich Text editor built on top of Facebook’s Draft.JS
          featuring a nice default base of components and extensibility. Good
          usability A nice default base of plugins Extensibility
        </p>
        <a className={styles.projectLink} href="http://clappr.github.io/">
          http://clappr.github.io/
        </a>
      </div>
    </section>
  </Layout>
)

export default ProjectPage
