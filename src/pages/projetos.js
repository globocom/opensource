import React from "react"
import styled from "styled-components"

import Layout from "../components/Layout"
import { Container } from "../styles/grid"

const Title = styled.h1`
  color: green;
`

function Projects() {
  return (
    <Layout>
      <Container>
        <Title>Projects</Title>
      </Container>
    </Layout>
  )
}

export default Projects
