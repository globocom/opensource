import React, { Component } from 'react'
import Button from './button'

import styles from './address-dialog.module.css'

const validateForm = (fields, formData) => {
  let formErrors = {}
  let isValid = true
  fields.forEach(field => {
    const value = formData[field.name]
    if (field.isRequired && value.trim().length === 0) {
      formErrors[field.name] = 'Este campo é obrigatório.'
      isValid = false
    }
  })
  return { formErrors, isValid }
}

const Field = ({
  label,
  type = 'text',
  placeholder,
  value,
  onChange,
  errorText,
}) => {
  return (
    <div className={styles.field}>
      {label && <label className={styles.fieldLabel}>{label}</label>}
      <input
        className={styles.textField}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      {errorText && <div className={styles.errorText}>{errorText}</div>}
    </div>
  )
}

class AddressDialog extends Component {
  state = {
    name: '',
    email: '',
    state: '',
    city: '',
    address: '',
    postalcode: '',
    formErrors: {},
  }

  handleFieldChange = fieldName => event => {
    const formErrors = this.state.formErrors
    delete formErrors[fieldName]
    this.setState({ [fieldName]: event.target.value, formErrors })
  }

  handleSubmit = () => {
    const { formErrors, isValid } = validateForm(
      [
        { name: 'name', isRequired: true },
        { name: 'email', isRequired: true },
        { name: 'state', isRequired: true },
        { name: 'city', isRequired: true },
        { name: 'address', isRequired: true },
        { name: 'postalcode', isRequired: true },
      ],
      this.state
    )

    this.setState({ formErrors })

    if (isValid) {
      console.log('FORM VALID')
    }
  }

  render() {
    const { open = false, onClose } = this.props
    if (!open) return null

    return (
      <div className={styles.dialog}>
        <div className={open ? styles.overlayVisible : styles.overlay} />
        <div className={styles.body}>
          <div className={styles.content}>
            <div className={styles.head}>Endereço</div>
            <div className={styles.form}>
              <p>Preencha com o endereço de envio da camiseta.</p>
              <form>
                <Field
                  label="Nome"
                  placeholder="Seu nome completo"
                  value={this.state.name}
                  onChange={this.handleFieldChange('name')}
                  errorText={this.state.formErrors.name}
                />
                <Field
                  type="email"
                  label="E-mail"
                  placeholder="voce@example.com"
                  value={this.state.email}
                  onChange={this.handleFieldChange('email')}
                  errorText={this.state.formErrors.email}
                />
                <Field
                  label="Estado"
                  placeholder="RJ"
                  value={this.state.state}
                  onChange={this.handleFieldChange('state')}
                  errorText={this.state.formErrors.state}
                />
                <Field
                  label="Cidade"
                  placeholder="Rio de Janeiro"
                  value={this.state.city}
                  onChange={this.handleFieldChange('city')}
                  errorText={this.state.formErrors.city}
                />
                <Field
                  label="Endereço"
                  placeholder="Avenida das américas 700 - Bloco 2 - Sala 3"
                  value={this.state.address}
                  onChange={this.handleFieldChange('address')}
                  errorText={this.state.formErrors.address}
                />
                <Field
                  label="CEP"
                  placeholder="00000-000"
                  value={this.state.postalcode}
                  onChange={this.handleFieldChange('postalcode')}
                  errorText={this.state.formErrors.postalcode}
                />
              </form>
            </div>
            <div className={styles.footer}>
              <Button
                label="cancelar"
                onClick={onClose}
                className={styles.button}
              />
              <Button
                label="enviar"
                fill={true}
                className={styles.button}
                onClick={this.handleSubmit}
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default AddressDialog
