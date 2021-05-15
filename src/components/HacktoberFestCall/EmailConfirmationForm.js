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

import { updateNameAndEmail } from "@services/api"

function EmailConfirmationForm({
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
        aria-labelledby="email-confirmation-form-title"
        aria-describedby="email-confirmation-form-description"
      >
        <DialogTitle id="email-confirmation-title">
          Dados de contato
        </DialogTitle>
        <DialogBody>
          <DialogText id="email-confirmation-description">
            Precisamos do seu e-mail para avisar das próximas etapas
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
    name: user.name,
    email: user.email,
  }),

  validationSchema: Yup.object().shape({
    email: Yup.string()
      .email("E-mail Inválido.")
      .required("Preenchimento obrigatório."),
    name: Yup.string().required("Preenchimento obrigatório."),
  }),

  handleSubmit: async (values, { setSubmitting, setStatus }) => {
    const user = await updateNameAndEmail(values)
    console.log(values)
    setStatus({ success: Boolean(user), completed: true })
    setSubmitting(false)
  },

  displayName: "EmailConfirmationForm",
})(EmailConfirmationForm)
