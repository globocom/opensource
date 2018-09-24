import React from 'react'
import Layout from '../components/layout'
import FeaturedProjects from '../components/featuredProjects'
import featuredProjects from '../data/featuredProjects'

import styles from './index.module.css'

const IndexPage = () => (
  <Layout>
    <section className={styles.heroSection}>
      <div>
        <h1 className={styles.heroSectionCall}>Addicted Developers</h1>
        <h2 className={styles.heroSectionSubCall}>Unidos pelo código.</h2>
        <a className={styles.heroSectionLink} href="">
          Let's code
        </a>
      </div>
    </section>
    <section className={styles.section}>
      <div className={styles.sectionContent}>
        <h2 className={styles.sectionTitle}>Nossos projetos</h2>
        <FeaturedProjects projects={featuredProjects} />
      </div>
    </section>
  </Layout>
)

export default IndexPage
