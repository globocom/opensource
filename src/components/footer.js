import React from 'react'
import { Link } from 'gatsby'

import styles from './footer.module.css'

const Footer = () => (
  <footer className={styles.footer}>
    <div className={styles.navigation}>
      <span className={styles.brand}>Open source</span>
      <nav className={styles.menu}>
        <a
          className={styles.menuItem}
          target="_blank"
          href="https://github.com/globocom/"
        >
          GITHUB
        </a>
        <a
          className={styles.menuItem}
          target="_blank"
          href="https://talentos.globo.com"
        >
          TALENTOS
        </a>
      </nav>
    </div>
    <div>Globo.com 2018</div>
  </footer>
)

export default Footer
