import React, { Component } from 'react'
import Button from './button'

import styles from './address-dialog.module.css'

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
    if (!open) return null

    return (
      <div className={styles.dialog}>
        <div className={open ? styles.overlayVisible : styles.overlay} />
        <div className={styles.body}>
          <div className={styles.content}>
            <div className={styles.head}>Endereço</div>
            <div className={styles.form}>
              <p>Preencha com o endereço de envio da camiseta.</p>
              <div className={styles.field}>
                <input
                  className={styles.textField}
                  type="text"
                  placeholder="Nome"
                  value={this.state.name}
                  onChange={this.handleFieldChange('name')}
                />
              </div>
              <div className={styles.field}>
                <input
                  className={styles.textField}
                  type="email"
                  placeholder="E-mail"
                  value={this.state.email}
                  onChange={this.handleFieldChange('email')}
                />
              </div>
              <div className={styles.field}>
                <input
                  className={styles.textField}
                  type="text"
                  placeholder="Estado"
                  value={this.state.state}
                  onChange={this.handleFieldChange('state')}
                />
              </div>
              <div className={styles.field}>
                <input
                  className={styles.textField}
                  type="text"
                  placeholder="Cidade"
                  value={this.state.city}
                  onChange={this.handleFieldChange('city')}
                />
              </div>
              <div className={styles.field}>
                <input
                  className={styles.textField}
                  type="text"
                  placeholder="Endereço"
                  value={this.state.address}
                  onChange={this.handleFieldChange('address')}
                />
              </div>
              <div className={styles.field}>
                <input
                  className={styles.textField}
                  type="text"
                  placeholder="CEP"
                  value={this.state.postalcode}
                  onChange={this.handleFieldChange('postalcode')}
                />
              </div>
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
