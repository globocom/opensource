import React from 'react'
import { Link } from 'gatsby'

import styles from './featuredProjects.module.css'

const FeaturedProjects = ({ projects }) => (
  <div className={styles.featuredProjects}>
    {projects.map(project => (
      <div className={styles.project} key={project.slug}>
        <div className={styles.projectLogo}>
          <img
            className={styles.projectLogoImage}
            src={project.thumb}
            alt={project.name}
          />
        </div>
        <p className={styles.projectDescription}>{project.description}</p>
        <Link className={styles.projectLink} to={`/projetos/${project.slug}`}>
          ver detalhes
        </Link>
      </div>
    ))}
  </div>
)

export default FeaturedProjects
