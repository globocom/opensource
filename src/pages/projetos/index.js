import React from 'react'
import Layout from '../../components/layout'
import TopBackground from '../../components/topBackground'

import styles from '../../components/layout.module.css'

const ProjetosPage = () => (
  <Layout renderTop={() => <TopBackground skyObject="rocket" />}>
    <section className={styles.mainSection}>
      <h1>Projetos</h1>
    </section>
  </Layout>
)

export default ProjetosPage
