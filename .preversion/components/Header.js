import React from "react"
import cx from "classnames"
import { Link } from "gatsby"

import logo from "../images/logo.svg"
import styles from "./Header.module.css"

const isMenuItemActive = ({ isCurrent }) => ({
  className: cx(styles.menuLink, { [styles.menuLinkActive]: isCurrent }),
})

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
