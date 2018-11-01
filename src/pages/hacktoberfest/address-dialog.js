import React, { Component } from 'react'
import TextInput from '../../components/text-input'
import SelectInput from '../../components/select-input'
import Button from '../../components/button'
import { updateUser } from '../../services/api'

import styles from './address-dialog.module.css'

const validateForm = (fields, formData) => {
  const formErrors = {}
  const values = {}
  let isValid = true

  fields.forEach(field => {
    values[field.name] = formData[field.name].trim()
    if (field.isRequired && values[field.name].length === 0) {
      formErrors[field.name] = 'Este campo é obrigatório.'
      isValid = false
    }
  })

  return { formErrors, isValid, values }
}

class AddressDialog extends Component {
  state = {
    name: '',
    email: '',
    state: '',
    city: '',
    address: '',
    postalcode: '',
    shirtsize: '',
    formErrors: {},
  }

  componentDidMount() {
    const { user } = this.props
    this.setState({
      name: user.Name,
      email: user.Email,
      state: user.State,
      city: user.City,
      address: user.Address,
      postalcode: user.PostalCode,
      shirtsize: user.ShirtSize,
    })
  }

  handleFieldChange = fieldName => event => {
    const formErrors = this.state.formErrors
    delete formErrors[fieldName]
    this.setState({ [fieldName]: event.target.value, formErrors })
  }

  handleSubmit = async () => {
    const { formErrors, isValid, values } = validateForm(
      [
        { name: 'name', isRequired: true },
        { name: 'email', isRequired: true },
        { name: 'state', isRequired: true },
        { name: 'city', isRequired: true },
        { name: 'address', isRequired: true },
        { name: 'postalcode', isRequired: true },
        { name: 'shirtsize', isRequired: true },
      ],
      this.state
    )

    this.setState({ formErrors })

    if (isValid) {
      const user = await updateUser(values)
      this.props.onSave(user)
      this.props.handleClose()
    }
  }

  render() {
    const { open = false, handleClose } = this.props
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
                <TextInput
                  label="Nome"
                  placeholder="Seu nome completo"
                  value={this.state.name}
                  onChange={this.handleFieldChange('name')}
                  errorText={this.state.formErrors.name}
                />
                <TextInput
                  type="email"
                  label="E-mail"
                  placeholder="voce@example.com"
                  value={this.state.email}
                  onChange={this.handleFieldChange('email')}
                  errorText={this.state.formErrors.email}
                />
                <TextInput
                  label="Estado"
                  placeholder="RJ"
                  value={this.state.state}
                  onChange={this.handleFieldChange('state')}
                  errorText={this.state.formErrors.state}
                />
                <TextInput
                  label="Cidade"
                  placeholder="Rio de Janeiro"
                  value={this.state.city}
                  onChange={this.handleFieldChange('city')}
                  errorText={this.state.formErrors.city}
                />
                <TextInput
                  label="Endereço"
                  placeholder="Avenida das américas 700 - Bloco 2 - Sala 3"
                  value={this.state.address}
                  onChange={this.handleFieldChange('address')}
                  errorText={this.state.formErrors.address}
                />
                <TextInput
                  label="CEP"
                  placeholder="00000-000"
                  value={this.state.postalcode}
                  onChange={this.handleFieldChange('postalcode')}
                  errorText={this.state.formErrors.postalcode}
                />
                <SelectInput
                  label="Tamanho da camiseta"
                  value={this.state.shirtsize}
                  onChange={this.handleFieldChange('shirtsize')}
                  errorText={this.state.formErrors.shirtsize}
                  options={[
                    { label: 'Selecione um tamanho', value: '' },
                    { label: 'Baby look - P', value: 'BLP' },
                    { label: 'Baby look - M', value: 'BLM' },
                    { label: 'Baby look - G', value: 'BLG' },
                    { label: 'Baby look - GG', value: 'BLGG' },
                    { label: 'T-Shirt - P', value: 'TSP' },
                    { label: 'T-Shirt - M', value: 'TSM' },
                    { label: 'T-Shirt - G', value: 'TSG' },
                    { label: 'T-Shirt - GG', value: 'TSGG' },
                    { label: 'T-Shirt - GGG', value: 'TSGGG' },
                  ]}
                />
              </form>
            </div>
            <div className={styles.footer}>
              <Button
                label="cancelar"
                onClick={handleClose}
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
