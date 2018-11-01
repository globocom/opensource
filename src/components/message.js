import React from 'react'
import PropTypes from 'prop-types'

import styles from './message.module.css'

export const TYPE_OK = Symbol('OK')
export const TYPE_ERROR = Symbol('ERROR')

const Message = ({ children, type = TYPE_OK }) => {
  const classNames = [styles.body]
  switch (type) {
    case TYPE_OK:
      classNames.push(styles.ok)
      break
    case TYPE_ERROR:
      classNames.push(styles.error)
      break
  }

  return (
    <div className={styles.message}>
      <div className={classNames.join(' ')}>{children}</div>
    </div>
  )
}

Message.propTypes = {
  children: PropTypes.string.isRequired,
  type: PropTypes.oneOf([TYPE_OK, TYPE_ERROR]),
}

export default Message
