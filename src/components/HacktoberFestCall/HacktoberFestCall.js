import React, { Fragment } from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import media from "styled-media-query"

import ButtonLink from "@components/ButtonLink"
import UserProgress from "./UserProgress"
import { Container } from "@components/Layout"
import { ButtonWrapper } from "@components/Button"

import { getEdition } from "@services/api"

import hacktoberFestImg from "@images/2020/astronauta.png"
import hacktoberFestCall from "@images/2020/logo-desktop.png"
import hacktoberFestCallOnly from "@images/2020/hacktober-callonly.png"
import BigBracketImage from "@images/2020/big-bracket.svg"
import year from "@images/2020/year.png"

const HacktoberFestCallWrapper = styled.section`
  margin-bottom: 20px;
  color: #fff;
`

const EventHeader1 = styled.div`
  margin-bottom: 16px;
  line-height: 1.4rem;
  width: 100%;
  text-align: center;

  ${media.greaterThan("medium")`
    font-size: 1.75rem;
    line-height: 2.3rem;
    margin-bottom: 32px;
    text-align: unset;
  `}

  strong {
    font-weight: 700;
  }

  span {
    display: inline;
    ${media.greaterThan("medium")`
      display: block;
  `}
  }
`

const EventHeader2 = styled.div`
  margin-bottom: 16px;
  text-align: center;
  font-size: 0.825rem;

  ${media.greaterThan("medium")`
    font-size: 1.25rem;
    text-align: unset;
    margin-bottom: 32px;
  `}
`

const CallContainer = styled(Container)`
  flex-direction: ${props => (props.isCallOnly ? "column-reverse" : "column")};
  display: flex;
  justify-content: center;
  align-items: center;

  ${media.greaterThan("large")`
    flex-direction: row;
  `}

  ${media.greaterThan("large")`
    justify-content: space-between;
  `}

  img {
    width: calc(100vw - 8vw);
    &.astronaut {
      ${media.greaterThan("medium")`
          width: 60%;
      `}
    }

    &.call {
      ${media.greaterThan("medium")`
        width: 100%;
      `}
    }
  }
`

const YearContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px 0px;
  img {
    width: calc(100vw - 50vw);
    ${media.greaterThan("large")`
      width: 100%;
    `}
  }
`

const BigBracketContainer = styled.div`
  display: flex;
  justify-content: center;
  img {
    width: calc(100vw - 5vw);
    ${media.greaterThan("large")`
      max-width: 1300px;
      width: 100%;
    `}
  }
`

const ActionButtons = styled.div`
  text-align: center;

  ${media.greaterThan("medium")`
    text-align: left;
  `}
`

const ButtonRules = styled(ButtonWrapper).attrs({
  as: "a",
})`
  background-color: #201c24;
  border-color: #fff;
  margin-left: 1rem;

  &:hover {
    ${media.greaterThan("large")`
      border-color: #CCC;
      background-color: #141315;
      color: #fff;
    `}
  }
`

function HacktoberFestCall({ user, isCallOnly }) {
  let [currentEdition, setCurrentEdition] = React.useState(null)

  React.useEffect(() => {
    const loadEdition = async () => {
      const response = await getEdition()
      if (response) {
        setCurrentEdition(response.edition)
      }
    }
    loadEdition()
  }, [])

  return (
    <HacktoberFestCallWrapper isCallOnly={isCallOnly}>
      {isCallOnly && (
        <BigBracketContainer>
          {" "}
          <img src={BigBracketImage} alt="Big Bracket" />{" "}
        </BigBracketContainer>
      )}
      <CallContainer isCallOnly={isCallOnly}>
        <img
          className="astronaut"
          src={hacktoberFestImg}
          alt="Hacktoberfest Art"
        />
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <img
            className="call"
            src={isCallOnly ? hacktoberFestCallOnly : hacktoberFestCall}
            alt="Hacktoberfest Art"
          />
          {isCallOnly && (
            <YearContainer>
              {" "}
              <img src={year} alt="Hacktoberfest Art" />{" "}
            </YearContainer>
          )}
          <div className="info">
            <EventHeader1>
              <strong>1 a 31 de outubro </strong>
              <span>na Globo</span>
            </EventHeader1>
            <EventHeader2>
              Contribua e ganhe uma camiseta exclusiva.
            </EventHeader2>
            <ActionButtons>
              {isCallOnly ? (
                <ButtonLink href="/hacktoberfest/" dark={true}>
                  Saiba mais
                </ButtonLink>
              ) : user && user.edition === currentEdition ? (
                <UserProgress user={user} />
              ) : (
                <Fragment>
                  <ButtonLink href="/login" dark={true}>
                    Participar
                  </ButtonLink>
                  <ButtonRules
                    href="/rules"
                    anchorProps={{ style: { background: "black" } }}
                  >
                    Regras &amp; Valores
                  </ButtonRules>
                </Fragment>
              )}
            </ActionButtons>
          </div>
        </div>
      </CallContainer>
    </HacktoberFestCallWrapper>
  )
}

HacktoberFestCall.propTypes = {
  user: PropTypes.object,
  isCallOnly: PropTypes.bool,
  onSignIn: PropTypes.func,
}

HacktoberFestCall.defaultProps = {
  isCallOnly: false,
}

export default HacktoberFestCall
