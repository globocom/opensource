import React from 'react'
import Layout from '../../components/layout'
import TopBackground from '../../components/topBackground'

import styles from './projects.module.css'

const MegadraftPage = () => (
  <Layout renderTop={() => <TopBackground skyObject="rocket" />}>
    <section className={styles.section}>
      <h1>Megadraft</h1>
    </section>
  </Layout>
)

export default MegadraftPage
