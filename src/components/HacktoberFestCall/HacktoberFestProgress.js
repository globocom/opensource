import React, { Fragment, useState } from "react"
import PropTypes from "prop-types"
import styled, { css } from "styled-components"

import Button from "../Button"
import TextInput from "../TextInput"
import Dialog, {
  DialogTitle,
  DialogBody,
  DialogFooter,
  DialogText,
} from "../Dialog"

import PullRequestIcon from "../../icons/PullRequest"
import MergedIcon from "../../icons/Merged"
import TShirtIcon from "../../icons/TShirt"

const HacktoberFestProgressWrapper = styled.div`
  color: #cfd3d4;
  line-height: 1.75rem;
  text-align: left;

  strong {
    font-weight: 700;
  }
`

const Greeting = styled.div`
  margin-bottom: 54px;

  strong {
    color: #59b8fd;
  }
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
`

const ProgressStatusText = styled.div`
  font-family: Hack, monospace;
  font-size: 0.875rem;

  strong {
    color: #59b8fd;
  }
`

const ProgressStatusActions = styled.div`
  margin-top: 30px;
`

const Achievement = styled.div`
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

const AchievementPRs = styled(Achievement)`
  font-size: 1rem;

  svg {
    width: 18px;
  }
`

function HacktoberFestProgress({ user }) {
  const { hacktoberfest } = user
  const { progress } = hacktoberfest
  const { achievements } = hacktoberfest.progress
  const completed =
    achievements.opened && achievements.merged && achievements.firsts

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
      <HacktoberFestProgressWrapper>
        <Greeting>
          Olá <strong>@{user.githubUser}</strong>!<br />
          Você está participando da{" "}
          <strong>Hacktoberfest {hacktoberfest.edition}</strong>. Acompanhe seu
          progresso:
        </Greeting>
        <Progress>
          <ProgressBody>
            <ProgressItem completed={achievements.opened}>
              <AchievementPRs>
                <span>2</span>
                <PullRequestIcon />
              </AchievementPRs>
            </ProgressItem>
            <ProgressLine completed={achievements.opened} />
            <ProgressItem completed={achievements.merged}>
              <Achievement>
                <MergedIcon />
              </Achievement>
            </ProgressItem>
            <ProgressLine completed={achievements.merged} />
            <ProgressItem completed={achievements.firsts}>
              <Achievement>
                <TShirtIcon />
              </Achievement>
            </ProgressItem>
          </ProgressBody>
          <ProgressStatus>
            {!completed ? (
              <ProgressStatusText>
                Você tem{" "}
                <strong>{progress.opened} pull request(s) enviado(s)</strong> e{" "}
                <strong>{progress.merged} aceito(s)</strong>
              </ProgressStatusText>
            ) : (
              <ProgressStatusText>
                <strong>Parabéns!</strong> Você concluiu o desafio da
                Hacktoberfest{" "}
                <span role="img" aria-label="Challenge complete">
                  💪🏆
                </span>
                . Clique no botão abaixo para informar o endereço de envio e o
                tamanho da sua camiseta:
              </ProgressStatusText>
            )}
            {completed && (
              <ProgressStatusActions>
                <Button dark={true} onClick={handleOpen}>
                  Informar dados para entrega
                </Button>
              </ProgressStatusActions>
            )}
          </ProgressStatus>
        </Progress>
      </HacktoberFestProgressWrapper>
    </Fragment>
  )
}

HacktoberFestProgress.propTypes = {
  user: PropTypes.object.isRequired,
}

export default HacktoberFestProgress
