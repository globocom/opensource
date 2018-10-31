import React from 'react'
import PropTypes from 'prop-types'
import styles from './text-input.module.css'

const TextInput = ({
  label,
  type = 'text',
  placeholder,
  value,
  onChange,
  errorText,
}) => {
  return (
    <div className={styles.field}>
      {label && <label className={styles.label}>{label}</label>}
      <input
        className={styles.input}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      {errorText && <div className={styles.errorText}>{errorText}</div>}
    </div>
  )
}

TextInput.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  errorText: PropTypes.string,
}

export default TextInput
