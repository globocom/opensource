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
  onClick,
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
  }

  if (url) {
    attrs.href = url
  }

  if (blank) {
    attrs.target = '_blank'
    attrs.rel = 'noopener noreferrer'
  }

  if (onClick) {
    attrs.onClick = onClick
  }

  return (
    <a {...attrs}>
      <span>{label}</span>
      {icon && <img className={styles.buttonIcon} src={icon} alt={label} />}
    </a>
  )
}

export default Button
