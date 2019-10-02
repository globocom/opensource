import React from "react"
import spinner from "../images/spinner.svg"

import styles from "./Spinner.module.css"

const Spinner = ({ message }) => (
  <div className={styles.spinner}>
    <img className={styles.spinnerImg} src={spinner} alt="Spinner" />
    {message && <span className={styles.spinnerMsg}>{message}</span>}
  </div>
)

export default Spinner
