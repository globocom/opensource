import React from 'react'

import styles from './button.module.css'

const Button = ({
  label,
  url,
  icon,
  className,
  transparent = false,
  fill = false,
  hover_light = false,
  hover_dark = false,
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

  if (hover_dark) {
    classNames.push(styles.hover_dark)
  }

  if (hover_light) {
    classNames.push(styles.hover_light)
  }

  return (
    <a className={classNames.join(' ')} href={url}>
      <span>{label}</span>
      {icon && <img className={styles.buttonIcon} src={icon} alt={label} />}
    </a>
  )
}

export default Button
