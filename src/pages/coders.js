import React, { useState, useEffect } from "react"
import styled, { css } from "styled-components"
import Pluralize from "react-pluralize"

import Seo from "@components/Seo"
import Layout, { Container } from "@components/Layout"
import MergedIcon from "@icons/Merged"

import { getCoders } from "@services/api"

const Coders = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`

const CoderRoot = styled.div`
  width: 200px;
  height: 200px;
  margin: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  img {
    padding: 2px;
    display: block;
    border-radius: 10px;
    width: 140px;
    height: 140px;
    box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2);

    ${props =>
      props.approved &&
      css`
        width: 100%;
        height: 100%;
      `}
  }
`

const CoderDetails = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  border-radius: 10px;
  background-color: rgba(0, 0, 0, 0.6);
`

const CoderText = styled.div`
  font-size: 0.8rem;
  z-index: 2;
  position: absolute;
  bottom: 0;
  right: 0;
  text-align: right;
  padding: 20px;
`

const CoderName = styled.div`
  font-weight: bold;
  font-size: 1rem;
  margin-bottom: 5px;
`

const CoderApproved = styled.div`
  margin-top: 5px;
`

function Coder({ githubUser, avatar, approved, totalContributions }) {
  const [showDetails, setShowDetails] = useState(false)

  function handleShowDetails() {
    setShowDetails(true)
  }

  function handleHideDetails() {
    setShowDetails(false)
  }

  return (
    <CoderRoot
      approved={approved}
      onMouseOver={handleShowDetails}
      onFocus={handleShowDetails}
      onMouseLeave={handleHideDetails}
    >
      <img
        src={avatar}
        alt={githubUser}
        title={`${githubUser} ${totalContributions} contribuições`}
      />
      {showDetails && (
        <CoderDetails>
          <CoderText>
            <CoderName>@{githubUser}</CoderName>
            <Pluralize
              singular="contribuição"
              plural="contribuições"
              showCount={true}
              count={totalContributions}
            />
            {approved && (
              <CoderApproved>
                <MergedIcon width="8" height="8" /> desafio completo
              </CoderApproved>
            )}
          </CoderText>
        </CoderDetails>
      )}
    </CoderRoot>
  )
}

function CodersPage() {
  const [coders, setCoders] = useState([])

  useEffect(() => {
    async function fetchCoders() {
      const coders = await getCoders()
      setCoders(coders || [])
    }
    fetchCoders()
  }, [])

  return (
    <Layout>
      <Seo
        title="Coders"
        description="Conheça alguns dos contribuidores Open Source de projetos da Globo"
      />
      <Container>
        <Coders>
          {coders.map(coder => {
            return (
              <Coder
                key={coder.githubID}
                githubUser={coder.githubUser}
                avatar={coder.avatar}
                approved={coder.approved}
                totalContributions={coder.total_pull_requests}
              />
            )
          })}
        </Coders>
      </Container>
    </Layout>
  )
}

export default CodersPage
