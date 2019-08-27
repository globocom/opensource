import React from 'react'

import styles from './RepoStats.module.css'

const RepoStats = ({ stars, pullRequests, commits, issues, className }) => (
  <div className={className}>
    <span alt="Stars" title="Stars" className={styles.stars}>
      {stars}
    </span>
    <span
      alt="Pull requests"
      title="Pull requests"
      className={styles.pullRequests}
    >
      {pullRequests}
    </span>
    {commits && (
      <span alt="Commits" title="Commits" className={styles.commits}>
        {commits}
      </span>
    )}
    <span alt="Issues" title="Issues" className={styles.issues}>
      {issues}
    </span>
  </div>
)

export default RepoStats
