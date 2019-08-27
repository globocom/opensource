import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import styles from './Button.module.css'

const Button = ({
  children,
  url,
  iconName,
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

  const iconStyle = cx(styles.icon, {
    [styles[`icon_${iconName}`]]: variant === 'normal',
    [styles[`icon_${iconName}_white`]]: variant !== 'normal',
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
      {iconName && <i className={iconStyle} />}
    </a>
  )
}

Button.propTypes = {
  children: PropTypes.string.isRequired,
  url: PropTypes.string,
  iconName: PropTypes.string,
  className: PropTypes.string,
  blank: PropTypes.bool,
  variant: PropTypes.oneOf(['normal', 'transparent', 'filled']),
  onClick: PropTypes.func,
}

Button.defaultProps = {
  url: '',
  iconName: '',
  blank: false,
  variant: 'normal',
}

export default Button
