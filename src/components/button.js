import React from 'react'

import styles from './button.module.css'

const Button = ({
  label,
  url,
  icon,
  className,
  blank = false,
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

  const attrs = {
    className: classNames.join(' '),
    href: url,
  }

  if (blank) {
    attrs.target = '_blank'
    attrs.rel = 'noopener noreferrer'
  }

  return (
    <a {...attrs}>
      <span>{label}</span>
      {icon && <img className={styles.buttonIcon} src={icon} alt={label} />}
    </a>
  )
}

export default Button
