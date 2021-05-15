import React, { Fragment, useState, useEffect } from "react"
import PropTypes from "prop-types"
import styled, { css } from "styled-components"
import Pluralize from "react-pluralize"

import Button from "@components/Button"

import PullRequestIcon from "@icons/PullRequest"
import MergedIcon from "@icons/Merged"
import TShirtIcon from "@icons/TShirt"
import Colors from "@constants/colors"

import ShippingForm from "./ShippingForm"
import EmailConfirmationForm from "./EmailConfirmationForm"

const UserProgressWrapper = styled.div`
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
    color: ${Colors.PRIMARY_COLOR};
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
          color: ${Colors.PRIMARY_COLOR};
          border-color: ${Colors.PRIMARY_COLOR};
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
          color: ${Colors.PRIMARY_COLOR};
          border-color: ${Colors.PRIMARY_COLOR};
        `}
`

const ProgressStatus = styled.div`
  margin: 30px 0;
`

const ProgressStatusText = styled.div`
  font-family: Hack, monospace;
  font-size: 0.875rem;

  strong {
    color: ${Colors.PRIMARY_COLOR};
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

function UserProgress({ user }) {
  const { hacktoberfest } = user
  const { progress } = hacktoberfest
  const { achievements } = hacktoberfest.progress

  // Used for testing
  const isStaff = ["arturfsousa", "guilhermebr", "marcelometal"].includes(
    user.githubUser
  )

  const completed =
    isStaff ||
    (achievements.opened && achievements.merged && achievements.firsts)

  const [open, setOpen] = useState(false)
  const [openEmailConfirmation, setOpenEmailConfirmation] = useState(false)

  function handleOpen() {
    setOpen(true)
  }

  function handleClose() {
    setOpen(false)
    setOpenEmailConfirmation(false)
  }

  useEffect(() => {
    console.log(user.email)
    setOpenEmailConfirmation(user.email ? false : true)
  }, [user])

  return (
    <Fragment>
      <ShippingForm user={user} open={open} handleClose={handleClose} />
      <EmailConfirmationForm
        user={user}
        open={openEmailConfirmation}
        handleClose={handleClose}
      />
      <UserProgressWrapper>
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
              achievements.opened ? (
                <ProgressStatusText>
                  Você tem{" "}
                  <strong>
                    <Pluralize
                      singular="pull request enviado"
                      plural="pull requests enviados"
                      count={progress.opened}
                    />
                  </strong>{" "}
                  e{" "}
                  <strong>
                    <Pluralize
                      singular="aceito"
                      zero="nenhum aceito"
                      count={progress.merged}
                    />
                  </strong>
                </ProgressStatusText>
              ) : (
                <ProgressStatusText>
                  Você ainda não enviou nenhum pull request!
                </ProgressStatusText>
              )
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
      </UserProgressWrapper>
    </Fragment>
  )
}

UserProgress.propTypes = {
  user: PropTypes.object.isRequired,
}

export default UserProgress
