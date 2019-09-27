import React from "react"
import styled from "styled-components"

import Layout from "../components/Layout"
import { Container } from "../styles/grid"

const Title = styled.h1`
  color: green;
`

function Index() {
  return (
    <Layout darkHeader={true} darkFooter={false}>
      <Container>
        <Title>Home</Title>
      </Container>
    </Layout>
  )
}

export default Index
