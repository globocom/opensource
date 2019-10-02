import React from "react"
import { Link } from "gatsby"

import styles from "./Footer.module.css"

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
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
              href="https://github.com/globocom/opensource"
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
            <a
              className={styles.menuItem}
              target="_blank"
              rel="noopener noreferrer"
              href="https://blog.globo.com"
            >
              BLOG
            </a>
          </div>
        </div>
        <span>Globo.com {currentYear}</span>
      </div>
    </footer>
  )
}

export default Footer
