import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import styles from './Message.module.css'

export const TYPE_OK = Symbol('OK')
export const TYPE_ERROR = Symbol('ERROR')

const Message = ({ children, type = TYPE_OK }) => {
  const bodyStyle = cx(styles.body, {
    [styles.ok]: type === TYPE_OK,
    [styles.error]: type === TYPE_ERROR,
  })

  return (
    <div className={styles.message}>
      <div className={bodyStyle}>{children}</div>
    </div>
  )
}

Message.propTypes = {
  children: PropTypes.string.isRequired,
  type: PropTypes.oneOf([TYPE_OK, TYPE_ERROR]),
}

export default Message
