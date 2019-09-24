import React from 'react'
import Layout from '../components/Layout'

import styles from './404.module.css'

const NotFoundPage = () => (
  <Layout mainTransparent={true}>
    <section className={styles.section}>
      <div>
        <h1 className={styles.hero}>Página não econtrada</h1>
        <p className={styles.subHero}>
          Esta página não existe{' '}
          <span role="img" aria-label="Sad face">
            😩
          </span>
        </p>
      </div>
    </section>
  </Layout>
)

export default NotFoundPage
