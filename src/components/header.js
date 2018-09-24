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
        <Link to="/">
          <img className={styles.logo} src={logo} alt="Globo.com" />
        </Link>
        <span className={styles.brandName}>Open Source</span>
      </div>
      <nav>
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
            <Link getProps={isMenuItemActive} to="/hacktober/">
              Hacktober
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
)

export default Header
