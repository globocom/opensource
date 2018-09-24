import React from 'react'
import { Link } from 'gatsby'

import styles from './footer.module.css'

const Footer = () => (
  <footer className={styles.footer}>
    <div className={styles.footerContent}>
      <div className={styles.navigation}>
        <Link to="/" className={styles.brand}>
          Open source
        </Link>
        <div className={styles.menu}>
          <a
            className={styles.menuItem}
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/globocom"
          >
            GITHUB
          </a>
          <a
            className={styles.menuItem}
            target="_blank"
            rel="noopener noreferrer"
            href="https://talentos.globo.com"
          >
            TALENTOS
          </a>
        </div>
      </div>
      <div>Globo.com 2018</div>
    </div>
  </footer>
)

export default Footer
