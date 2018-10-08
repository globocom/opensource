import React from 'react'

import styles from './button.module.css'

const Button = ({
  label,
  url,
  icon,
  className,
  transparent = false,
  fill = false,
}) => {
  const classNames = [styles.button]

  if (className) {
    classNames.push(className)
  }

  if (transparent) {
    classNames.push(styles.transparent)
  }

  if (fill) {
    classNames.push(styles.fill)
  }

  return (
    <a className={classNames.join(' ')} href={url}>
      <span>{label}</span>
      {icon && <img className={styles.buttonIcon} src={icon} alt={label} />}
    </a>
  )
}

export default Button
