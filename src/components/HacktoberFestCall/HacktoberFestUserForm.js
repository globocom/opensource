import React from "react"

import * as Yup from "yup"
import { withFormik } from "formik"

import Button from "../Button"
import TextInput from "../TextInput"
import Dialog, {
  DialogTitle,
  DialogBody,
  DialogFooter,
  DialogText,
} from "../Dialog"

import { updateUser } from "../../services/api"

function HacktoberFestUserForm({
  open,
  handleClose,
  values,
  touched,
  errors,
  handleChange,
  handleBlur,
  handleSubmit,
}) {
  return (
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
            name="postalcode"
            value={values.postalcode}
            onChange={handleChange}
            onBlur={handleBlur}
            errorText={touched.postalcode ? errors.postalcode : ""}
          />
          <TextInput
            label="Tamanho da camiseta"
            type="text"
            placeholder=""
            name="shirtsize"
            value={values.shirtsize}
            onChange={handleChange}
            onBlur={handleBlur}
            errorText={touched.shirtsize ? errors.shirtsize : ""}
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
  )
}

export default withFormik({
  mapPropsToValues: ({ user }) => ({
    name: user.name,
    email: user.email,
    state: user.state,
    city: user.city,
    address: user.address,
    postalcode: user.postalCode,
    shirtsize: user.shirtSize,
  }),

  validationSchema: Yup.object().shape({
    name: Yup.string().required("Preenchimento obrigatório."),
    email: Yup.string()
      .email("E-mail Inválido.")
      .required("Preenchimento obrigatório."),
    shirtsize: Yup.string().required("Preenchimento obrigatório."),
    state: Yup.string().required("Preenchimento obrigatório."),
    city: Yup.string().required("Preenchimento obrigatório."),
    address: Yup.string().required("Preenchimento obrigatório."),
    postalCode: Yup.string()
      .required("Preenchimento obrigatório.")
      .min(8, "Cep deve possuir 8 dígitos"),
  }),

  handleSubmit: async (values, { setSubmitting }) => {
    const user = await updateUser(values)

    if (user) {
      console.log(user)
    }

    setSubmitting(false)
  },

  displayName: "HacktoberFestUserForm",
})(HacktoberFestUserForm)
