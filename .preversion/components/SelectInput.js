import React from "react"
import PropTypes from "prop-types"

import styles from "./SelectInput.module.css"

const SelectInput = ({ label, value, options = [], onChange, errorText }) => {
  return (
    <div className={styles.field}>
      {label && <label className={styles.label}>{label}</label>}
      <select className={styles.input} value={value} onChange={onChange}>
        {options.map(option => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {errorText && <div className={styles.errorText}>{errorText}</div>}
    </div>
  )
}

SelectInput.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string,
  options: PropTypes.array,
  onChange: PropTypes.func.isRequired,
  errorText: PropTypes.string,
}

export default SelectInput
