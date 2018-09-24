import React from 'react'
import { Link } from 'gatsby'

import logo from '../images/logo.svg'
import styles from './header.module.css'

const Header = () => (
  <header className={styles.header}>
    <div className={styles.brand}>
      <img className={styles.logo} src={logo} />
      <span className={styles.brandName}>Open Source</span>
    </div>
    <nav>
      <ul className={styles.menu}>
        <li className={styles.menuItemActive}>
          <Link to="/projetos/">Projetos</Link>
        </li>
        <li className={styles.menuItem}>
          <Link to="/nosso-time/">Nosso time</Link>
        </li>
        <li className={styles.menuItem}>
          <Link to="/hacktober/">Hacktober</Link>
        </li>
      </ul>
    </nav>
  </header>
)

export default Header
