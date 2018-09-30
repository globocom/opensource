import React from 'react'
import Layout from '../components/layout'

import styles from './404.module.css'

const NotFoundPage = () => (
  <Layout mainTransparent={true}>
    <section className={styles.section}>
      <div>
        <h1 className={styles.hero}>Página não econtrada</h1>
        <p className={styles.subHero}>Esta página não existe 😩</p>
      </div>
    </section>
  </Layout>
)

export default NotFoundPage
