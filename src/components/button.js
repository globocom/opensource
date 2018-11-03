import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import styles from './button.module.css'

const Button = ({
  children,
  url,
  icon,
  className,
  blank = false,
  variant = 'normal',
  onClick,
}) => {
  const style = cx(styles.button, {
    [className]: className,
    [styles.normal]: variant === 'normal',
    [styles.transparent]: variant === 'transparent',
    [styles.filled]: variant === 'filled',
  })

  const buttonProps = {}
  if (url) {
    buttonProps.href = url
  }

  if (blank) {
    buttonProps.target = '_blank'
    buttonProps.rel = 'noopener noreferrer'
  }

  if (onClick) {
    buttonProps.onClick = onClick
  }

  return (
    <a className={style} {...buttonProps}>
      <span>{children}</span>
      {icon && <img className={styles.buttonIcon} src={icon} />}
    </a>
  )
}

Button.propTypes = {
  children: PropTypes.string.isRequired,
  url: PropTypes.string,
  className: PropTypes.string,
  blank: PropTypes.bool,
  variant: PropTypes.oneOf(['normal', 'transparend', 'filled']),
  onClick: PropTypes.func,
}

export default Button
