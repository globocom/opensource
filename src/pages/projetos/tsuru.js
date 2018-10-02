import React from 'react'
import Layout from '../../components/layout'
import TopBackground from '../../components/topBackground'
import Button from '../../components/button'

import styles from './project.module.css'
import projectLogo from '../../images/logos/logo_tsuru.svg'

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
          <img className={styles.projectLogo} src={projectLogo} alt="Tsuru" />
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
          Tsuru is an extensible and open source Platform as a Service (PaaS)
          that makes application deployments faster and easier. With tsuru, you
          don’t need to think about servers at all. As an application developer,
          you can: Back apps with add-on resources such as SQL and NoSQL
          databases Manage apps using the tsuru command-line tool Deploy apps
          using Git, tsuru app-deploy or using docker images directly
        </p>
        <a className={styles.projectLink} href="http://tsuru.io/">
          http://tsuru.io/
        </a>
      </div>
    </section>
  </Layout>
)

export default ProjectPage
