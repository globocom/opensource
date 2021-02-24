import React, { Fragment, useState, useEffect } from "react"

import * as Yup from "yup"
import { withFormik } from "formik"

import Dialog, {
  DialogTitle,
  DialogBody,
  DialogFooter,
  DialogText,
} from "@components/Dialog"

import Button from "@components/Button"
import TextInput from "@components/TextInput"
import SelectInput from "@components/SelectInput"
import Message from "@components/Message"

import { updateUser } from "@services/api"

function ShippingForm({
  open,
  handleClose,
  values,
  touched,
  errors,
  handleChange,
  handleBlur,
  handleSubmit,
  status,
}) {
  const [showMessage, setShowMessage] = useState(false)

  useEffect(() => {
    if (status && status.completed) {
      handleClose()
      setShowMessage(true)

      window.setTimeout(() => {
        setShowMessage(false)
      }, 6000)
    }
    // https://github.com/facebook/create-react-app/issues/6880
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [status])

  return (
    <Fragment>
      {showMessage && status && status.success && (
        <Message variant="success">Dados enviados com sucesso!</Message>
      )}
      {showMessage && status && !status.success && (
        <Message variant="error">
          Houve uma falha na alteração dos seus dados! Tente novamente.
        </Message>
      )}
      <Dialog
        open={open}
        aria-labelledby="shipping-form-title"
        aria-describedby="shipping-form-description"
      >
        <DialogTitle id="shipping-form-title">Dados para entrega</DialogTitle>
        <DialogBody>
          <DialogText id="shipping-form-description">
            Informe os dados para entrega da sua camiseta:
          </DialogText>
          <form onSubmit={handleSubmit}>
            <SelectInput
              label="Tamanho da camiseta"
              name="shirtsize"
              value={values.shirtsize}
              onChange={handleChange}
              onBlur={handleBlur}
              errorText={touched.shirtsize ? errors.shirtsize : ""}
            >
              <option value="">Selecione um tamanho</option>
              <option value="BLP">Baby look - P</option>
              <option value="BLM">Baby look - M</option>
              <option value="BLG">Baby look - G</option>
              <option value="BLGG">Baby look - GG</option>
              <option value="TSP">T-Shirt - P</option>
              <option value="TSM">T-Shirt - M</option>
              <option value="TSG">T-Shirt - G</option>
              <option value="TSGG">T-Shirt - GG</option>
              <option value="TSGGG">T-Shirt - GGG</option>
            </SelectInput>
            <TextInput
              label="Nome"
              type="text"
              placeholder="Seu nome completo"
              name="name"
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
              errorText={touched.name ? errors.name : ""}
            />
            <TextInput
              label="E-mail"
              type="email"
              placeholder="voce@example.com"
              name="email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              errorText={touched.email ? errors.email : ""}
            />
            <TextInput
              label="Estado"
              type="text"
              placeholder="RJ"
              name="state"
              value={values.state}
              onChange={handleChange}
              onBlur={handleBlur}
              errorText={touched.state ? errors.state : ""}
            />
            <TextInput
              label="Cidade"
              type="text"
              placeholder="Rio de Janeiro"
              name="city"
              value={values.city}
              onChange={handleChange}
              onBlur={handleBlur}
              errorText={touched.city ? errors.city : ""}
            />
            <TextInput
              label="Endereço"
              type="text"
              placeholder="Avenida Exemplo N 999 - Bloco 1"
              name="address"
              value={values.address}
              onChange={handleChange}
              onBlur={handleBlur}
              errorText={touched.address ? errors.address : ""}
            />
            <TextInput
              label="CEP"
              type="text"
              placeholder="00000-000"
              name="postalCode"
              value={values.postalCode}
              onChange={handleChange}
              onBlur={handleBlur}
              errorText={touched.postalCode ? errors.postalCode : ""}
            />
          </form>
        </DialogBody>
        <DialogFooter>
          <Button onClick={handleClose}>Cancelar</Button>
          <Button onClick={handleSubmit} type="submit">
            Salvar
          </Button>
        </DialogFooter>
      </Dialog>
    </Fragment>
  )
}

export default withFormik({
  mapPropsToValues: ({ user }) => ({
    shirtsize: user.shirtSize,
    name: user.name,
    email: user.email,
    state: user.state,
    city: user.city,
    address: user.address,
    postalCode: user.postalCode,
  }),

  validationSchema: Yup.object().shape({
    shirtsize: Yup.string().required("Preenchimento obrigatório."),
    name: Yup.string().required("Preenchimento obrigatório."),
    email: Yup.string()
      .email("E-mail Inválido.")
      .required("Preenchimento obrigatório."),
    state: Yup.string().required("Preenchimento obrigatório."),
    city: Yup.string().required("Preenchimento obrigatório."),
    address: Yup.string().required("Preenchimento obrigatório."),
    postalCode: Yup.string()
      .required("Preenchimento obrigatório.")
      .min(8, "Cep deve possuir 8 dígitos"),
  }),

  handleSubmit: async (values, { setSubmitting, setStatus }) => {
    const user = await updateUser(values)
    setStatus({ success: Boolean(user), completed: true })
    setSubmitting(false)
  },

  displayName: "ShippingForm",
})(ShippingForm)
