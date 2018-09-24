import React from 'react'
import Layout from '../components/layout'
import FeaturedProjects from '../components/featuredProjects'
import featuredProjects from '../data/featuredProjects'

import styles from './index.module.css'

const IndexPage = () => (
  <Layout>
    {/* <h1>LandingPage</h1>
    <p>Welcome to Globo.com Open source.</p> */}
    <section className={styles.section}>
      <div className={styles.sectionContent}>
        <h2 className={styles.sectionTitle}>Nossos projetos</h2>
        <FeaturedProjects projects={featuredProjects} />
      </div>
    </section>
  </Layout>
)

export default IndexPage
