import React, { Fragment, useState } from "react"
import PropTypes from "prop-types"
import styled, { css } from "styled-components"

import Button from "./Button"
import TextInput from "./TextInput"
import Dialog, {
  DialogTitle,
  DialogBody,
  DialogFooter,
  DialogText,
} from "./Dialog"

const UserProgressWrapper = styled.div`
  color: #cfd3d4;
  line-height: 1.75rem;
  text-align: left;

  strong {
    font-weight: 700;
  }

  i {
    font-family: Hack, monospace;
    display: block;
    margin-top: 1rem;
  }
`

const Greeting = styled.div`
  margin-bottom: 54px;
`

const Progress = styled.div`
  text-align: center;
`

const ProgressBody = styled.div`
  display: flex;
  align-items: center;
`

const ProgressLine = styled.div`
  flex: 1;
  border-top: 3px solid #cfd3d4;

  ${props =>
    !props.completed
      ? css`
          color: #cfd3d4;
          border-color: #cfd3d4;
        `
      : css`
          color: #59b8fd;
          border-color: #59b8fd;
        `}
`

const ProgressItem = styled.div`
  margin: 0 5px;
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  border-style: solid;

  ${props =>
    !props.completed
      ? css`
          border-width: 3px;
          color: #cfd3d4;
          border-color: #cfd3d4;
        `
      : css`
          border-width: 5px;
          color: #59b8fd;
          border-color: #59b8fd;
        `}
`

const ProgressStatus = styled.div`
  margin: 30px 0;
  font-size: 0.875rem;
`

const Rule = styled.div`
  display: flex;
  align-items: center;
  font-weight: 600;

  span {
    margin-right: 0.2rem;
  }

  svg {
    color: inherit;
    width: 25px;
    height: auto;
  }
`

const RuleOne = styled(Rule)`
  font-size: 1rem;

  svg {
    width: 18px;
  }
`

function UserProgress({ user }) {
  const { hacktober } = user
  const { progress } = hacktober
  const { achievements } = hacktober.progress

  const [open, setOpen] = useState(false)

  function handleOpen() {
    setOpen(true)
  }

  function handleClose() {
    setOpen(false)
  }

  return (
    <Fragment>
      <Dialog
        open={open}
        aria-labelledby="shipping-data-title"
        aria-describedby="shipping-data-description"
      >
        <DialogTitle id="shipping-data-title">Dados para entrega</DialogTitle>
        <DialogBody>
          <DialogText id="shipping-data-description">
            Informe os dados para entrega da sua camiseta:
          </DialogText>
          <form>
            <TextInput
              label="Nome"
              type="text"
              placeholder="Seu nome completo"
            />
            <TextInput
              label="E-mail"
              type="email"
              placeholder="voce@example.com"
              errorText="Oieee"
            />
            <TextInput label="Estado" type="text" placeholder="Ex.: RJ" />
            <TextInput
              label="Cidade"
              type="text"
              placeholder="Ex.: Rio de Janeiro"
            />
            <TextInput
              label="Endereço"
              type="text"
              placeholder="Ex.: Avenida Exemplo N 999 - Bloco 1"
            />
            <TextInput label="CEP" type="text" placeholder="00000-000" />
          </form>
        </DialogBody>
        <DialogFooter>
          <Button onClick={handleClose}>Cancelar</Button>
          <Button>Salvar</Button>
        </DialogFooter>
      </Dialog>
      <UserProgressWrapper>
        <Greeting>
          Olá <strong>{user.name}</strong>!<br />
          Você está participando do evento deste ano. Acompanhe seu progresso:
        </Greeting>
        <Progress>
          <ProgressBody>
            <ProgressItem completed={achievements.opened}>
              <RuleOne>
                <span>2</span>
                <svg
                  width="60"
                  height="76"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 60 76"
                >
                  <path
                    clipRule="evenodd"
                    d="M10.72 18.441a7.72 7.72 0 1 0 0-15.44 7.72 7.72 0 0 0 0 15.44zM10.72 73a7.72 7.72 0 1 0 0-15.441 7.72 7.72 0 0 0 0 15.441zM49.838 53.441a7.72 7.72 0 1 0 0-15.441 7.72 7.72 0 0 0 0 15.441z"
                    stroke="currentColor"
                    strokeWidth="5"
                  />
                  <path
                    fill="currentColor"
                    d="M9.176 18.441h4.118v39.118H9.176z"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12.318 21.53c.03.256.492 1.073.518 1.324 1.59 15.415 11.03 21.289 29.281 19.86v4.55c-18.316-.528-22.282-1.47-29.752-10.879 0 0-1.551-2.206-3.189-9.56l3.142-5.296z"
                    fill="currentColor"
                  />
                </svg>
              </RuleOne>
            </ProgressItem>
            <ProgressLine completed={achievements.opened} />
            <ProgressItem completed={achievements.merged}>
              <Rule>
                <svg
                  width="98"
                  height="70"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 98 70"
                >
                  <path
                    d="M30.933 62.357L3.694 35.385 0 39.045 30.933 70 97.337 3.55 93.467 0 30.933 62.357z"
                    fill="currentColor"
                  />
                </svg>
              </Rule>
            </ProgressItem>
            <ProgressLine completed={achievements.merged} />
            <ProgressItem completed={achievements.firsts}>
              <Rule>
                <svg
                  width="84"
                  height="70"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 84 70"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M50.577 0h8.72L83.71 14l-6.974 19.25-10.464-3.5V70H17.441V29.75l-10.464 3.5L0 14 24.416 0h8.72c0 4.826 3.912 8.75 8.72 8.75 4.807 0 8.721-3.924 8.721-8.75zm16.764 26.46l7.234 2.414 4.806-13.232L58.347 3.608h-4.806c-1.498 5.043-6.162 8.72-11.686 8.72-5.522 0-10.188-3.677-11.687-8.72h-4.805L4.33 15.642l4.806 13.232 7.233-2.414 4.585-1.532v41.464h41.802V24.928l4.585 1.532z"
                    fill="currentColor"
                  />
                </svg>
              </Rule>
            </ProgressItem>
          </ProgressBody>
          <ProgressStatus>
            {!progress.hasCompleted ? (
              <i>
                Você tem{" "}
                <strong>{progress.opened} pull request(s) enviado(s)</strong> e{" "}
                <strong>{progress.merged} aceito(s)</strong>
              </i>
            ) : (
              <i>
                <strong>Parabéns!!!</strong> Você concluiu o desafio da
                Hacktoberfest{" "}
                <span role="img" aria-label="Challenge complete">
                  🏆
                </span>
                . Clique no botão abaixo para informar o endereço de envio e o
                tamanho da sua camiseta:
              </i>
            )}
          </ProgressStatus>
          {progress.hasCompleted && (
            <Button dark={true} onClick={handleOpen}>
              Informar dados para entrega
            </Button>
          )}
        </Progress>
      </UserProgressWrapper>
    </Fragment>
  )
}

UserProgress.propTypes = {
  user: PropTypes.object.isRequired,
}

export default UserProgress
