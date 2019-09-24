import React from "react"
import styled from "styled-components"

import Layout from "../components/Layout"
import { Container } from "../styles/grid"

const Title = styled.h1`
  color: green;
`

const Hacktoberfest = () => (
  <Layout dark={true}>
    <Container>
      <Title>Hacktoberfest</Title>
    </Container>
  </Layout>
)

export default Hacktoberfest
