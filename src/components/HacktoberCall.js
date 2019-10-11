import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import media from "styled-media-query"

import ButtonLink from "./ButtonLink"
import UserProgress from "./UserProgress"
import { Container } from "../styles/grid"

import hacktoberFestImg from "../images/hacktoberfest-lg.png"

const HacktoberCallWrapper = styled.section`
  background-color: #000;
  color: #fff;
  padding: 2rem 0;
`

const Title = styled.div`
  margin: 2rem 0 32px 0;
  font-family: "Bigelow Rules", cursive;
  font-size: 4.5rem;

  ${media.greaterThan("medium")`
    font-size: 5.5rem;
    margin-bottom: 48px;
  `}

  ${media.greaterThan("large")`
    font-size: 7.5rem;
  `}
`

const EventHeader1 = styled.div`
  margin-bottom: 32px;
  line-height: 1.4rem;

  ${media.greaterThan("medium")`
    font-size: 1.75rem;
    margin-bottom: 48px;
    line-height: 2.3rem;
  `}

  strong {
    font-weight: 700;
  }
`

const EventHeader2 = styled.div`
  margin-bottom: 32px;

  ${media.greaterThan("medium")`
    font-size: 1.25rem;
    margin-bottom: 48px;
  `}
`

const CallContainer = styled(Container)`
  ${media.greaterThan("medium")`
    display: flex;
    justify-content: center;
    align-items: center;
  `}

  ${media.greaterThan("large")`
    justify-content: space-between;
  `}

  img {
    width: 100%;

    ${media.greaterThan("medium")`
      width: 45%;
    `}

    ${media.greaterThan("large")`
      width: unset;
    `}
  }
`

const ActionButtons = styled.div`
  margin: 3.5rem 0 2.5rem;
  text-align: center;

  ${media.greaterThan("medium")`
    text-align: left;
  `}
`

function HacktoberCall({ user, isCallOnly }) {
  return (
    <HacktoberCallWrapper>
      <CallContainer>
        <div>
          <Title>Hacktoberfest</Title>
          <EventHeader1>
            <strong>1 a 31 de outubro</strong>
            <br /> na Globo.com
          </EventHeader1>
          <EventHeader2>Contribua e ganhe uma camiseta exclusiva.</EventHeader2>
          <ActionButtons>
            {isCallOnly ? (
              <ButtonLink href="/hacktoberfest" dark={true}>
                Saiba mais
              </ButtonLink>
            ) : user ? (
              <UserProgress user={user} />
            ) : (
              <ButtonLink href="/login" dark={true}>
                Participar
              </ButtonLink>
            )}
          </ActionButtons>
        </div>
        <img src={hacktoberFestImg} alt="Hacktoberfest Art" />
      </CallContainer>
    </HacktoberCallWrapper>
  )
}

HacktoberCall.propTypes = {
  user: PropTypes.object,
  isCallOnly: PropTypes.bool,
  onSignIn: PropTypes.func,
}

HacktoberCall.defaultProps = {
  isCallOnly: false,
}

export default HacktoberCall
