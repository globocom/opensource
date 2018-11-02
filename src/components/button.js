import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

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
  const style = cx(styles.button, {
    [className]: className,
    [styles.transparent]: transparent,
    [styles.fill]: fill,
  })

  const attrs = {
    className: style,
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

Button.propTypes = {
  label: PropTypes.string.isRequired,
  url: PropTypes.string,
  className: PropTypes.string,
  blank: PropTypes.bool,
  transparent: PropTypes.bool,
  fill: PropTypes.bool,
  onClick: PropTypes.func,
}

export default Button
