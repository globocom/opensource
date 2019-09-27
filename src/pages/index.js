import React from "react"
import styled from "styled-components"

import Layout from "../components/Layout"
import { Container } from "../styles/grid"

const HeroWrapper = styled.div`
  color: #fff;

  h1 {
    font-weight: bold;
    font-size: 2.25rem;
    margin-bottom: 1.5rem;
    line-height: normal;
  }

  span {
    font-family: Hack, monospace;
  }
`

function Index() {
  return (
    <Layout darkHeader={true} darkFooter={false}>
      <Container>
        <HeroWrapper>
          <h1>Addicted Developers</h1>
          <span>unidos pelo código_</span>
        </HeroWrapper>
      </Container>
    </Layout>
  )
}

export default Index
