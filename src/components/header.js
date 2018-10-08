import React from 'react'
import { Link } from 'gatsby'

import logo from '../images/logo.svg'
import styles from './header.module.css'

const isMenuItemActive = ({ isCurrent }) => {
  const classNames = [styles.menuLink]
  if (isCurrent) {
    classNames.push(styles.menuLinkActive)
  }
  return { className: classNames.join(' ') }
}

const Header = () => (
  <header className={styles.header}>
    <div className={styles.headerContent}>
      <div className={styles.brand}>
        <Link className={styles.brandLink} to="/">
          <img className={styles.brandLogo} src={logo} alt="Globo.com" />
          <span className={styles.brandName}>Open Source</span>
        </Link>
      </div>
      <ul className={styles.menu}>
        <li className={styles.menuItem}>
          <Link getProps={isMenuItemActive} to="/projetos/">
            Projetos
          </Link>
        </li>
        <li className={styles.menuItem}>
          <Link getProps={isMenuItemActive} to="/nosso-time/">
            Nosso time
          </Link>
        </li>
        <li className={styles.menuItem}>
          <Link getProps={isMenuItemActive} to="/hacktoberfest/">
            Hacktoberfest
          </Link>
        </li>
      </ul>
    </div>
  </header>
)

export default Header
