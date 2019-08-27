import React from 'react'

import styles from './TopBackground.module.css'

const TopBackground = ({ skyObject }) => (
  <div className={styles.topBackground}>
    <div className={styles.cornerTop} />
    <div className={styles.cornerBottom} />
    <div className={styles.topBackgroundContent}>
      <div className={styles[skyObject]} />
    </div>
  </div>
)

export default TopBackground
