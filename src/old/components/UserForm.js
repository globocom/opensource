import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Modal from './Modal'
import TextInput from './TextInput'
import SelectInput from './SelectInput'
import Button from './Button'
import { TYPE_OK, TYPE_ERROR } from './Message'

import { updateUser } from '../services/api'

import styles from './UserForm.module.css'

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

class UserForm extends Component {
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

  handleSubmit = async event => {
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
      this.props.onClose(event)

      if (user) {
        this.props.onSave(user, {
          type: TYPE_OK,
          text: 'Dados alterados com sucesso.',
        })
      } else {
        this.props.onSave(user, {
          type: TYPE_ERROR,
          text: 'Houve uma falha na alteração dos seus dados. Tente novamente.',
        })
      }
    }
  }

  render() {
    const { open, onClose } = this.props

    return (
      <Modal
        open={open}
        onClose={onClose}
        title="Endereço"
        footer={
          <>
            <Button onClick={onClose} className={styles.button}>
              Cancelar
            </Button>
            <Button
              variant="filled"
              className={styles.button}
              onClick={this.handleSubmit}
            >
              Salvar
            </Button>
          </>
        }
      >
        <form>
          <p>Preencha com o endereço de envio da camiseta.</p>
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
            placeholder="Avenida de Exemplo N 999 - Bloco 1"
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
      </Modal>
    )
  }
}

UserForm.propTypes = {
  user: PropTypes.object.isRequired,
  open: PropTypes.bool,
  onClose: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired,
}

export default UserForm
