import React from "react"
import styled from "styled-components"
import media from "styled-media-query"

import Layout, { Container } from "@components/Layout"

const NotFoundMessage = styled.section`
  margin-top: 6rem;

  ${media.greaterThan("medium")`
    text-align: center;
  `}

  h1 {
    font-weight: bold;
    font-size: 2rem;
    margin-bottom: 3rem;

    ${media.greaterThan("medium")`
      font-size: 3rem;
      margin-bottom: 5rem;
    `}
  }

  p {
    font-size: 1.2rem;
    line-height: 2rem;

    ${media.greaterThan("medium")`
      font-size: 2rem;
    `}
  }
`

function NotFoundPage() {
  return (
    <Layout>
      <Container>
        <NotFoundMessage>
          <h1>Página não econtrada</h1>
          <p>Descupe, a página que você tentou acessar não existe.</p>
        </NotFoundMessage>
      </Container>
    </Layout>
  )
}

export default NotFoundPage
