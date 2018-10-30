import React, { Component } from 'react'
import Button from './button'

import styles from './address-dialog.module.css'

const Field = ({ label, type = 'text', placeholder, value, onChange }) => {
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
  }

  handleFieldChange = fieldName => event => {
    this.setState({ [fieldName]: event.target.value })
  }

  handleSubmit = () => {
    const address = {
      ...this.state,
    }

    console.log(address)
  }

  render() {
    const { open = false, onClose } = this.props
    if (open) return null

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
                />
                <Field
                  type="email"
                  label="E-mail"
                  placeholder="voce@example.com"
                  value={this.state.email}
                  onChange={this.handleFieldChange('email')}
                />
                <Field
                  label="Estado"
                  placeholder="RJ"
                  value={this.state.state}
                  onChange={this.handleFieldChange('state')}
                />
                <Field
                  label="Cidade"
                  placeholder="Rio de Janeiro"
                  value={this.state.city}
                  onChange={this.handleFieldChange('city')}
                />
                <Field
                  label="Endereço"
                  placeholder="Avenida das américas 700 - Bloco 2 - Sala 3"
                  value={this.state.address}
                  onChange={this.handleFieldChange('address')}
                />
                <Field
                  label="CEP"
                  placeholder="00000-000"
                  value={this.state.address}
                  onChange={this.handleFieldChange('postalcode')}
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
