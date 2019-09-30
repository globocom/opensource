import React from "react"
import styled from "styled-components"
import media from "styled-media-query"

import Layout from "../components/Layout"
import { Container } from "../styles/grid"

import bgImageTopSm from "../images/astrunaut-front-sm.jpg"
import bgImageTopLg from "../images/astrunaut-front-lg.jpg"

const HeroWrapper = styled.div`
  color: #fff;
  background-color: #000;
  padding-top: 2.3rem;
  height: 43rem;
  background-image: url(${bgImageTopSm});
  background-repeat: no-repeat;
  background-position-x: center;
  background-position-y: bottom;

  ${media.greaterThan("medium")`
    height: 62rem;
    background-image: url(${bgImageTopLg});
    background-size: cover;
    background-position-y: top;
    background-position-x: -175px;
  `}

  ${media.greaterThan("large")`
    background-position-x: center;
    background-position-y: -135px;
  `}

  h1 {
    font-weight: bold;
    font-size: 2.25rem;
    margin-bottom: 1.5rem;
    line-height: normal;

    ${media.greaterThan("medium")`
      font-size: 3.75rem;
    `}
  }

  span {
    font-family: Hack, monospace;

    ${media.greaterThan("medium")`
      font-size: 1.75rem;
    `}
  }
`

const HeroText = styled.div`
  ${media.greaterThan("medium")`
    width: 26.75rem;
    padding-top: 120px;
    padding-left: 28px;
  `}
`

function Index() {
  return (
    <Layout darkHeader={true} darkFooter={false} noPadding={true}>
      <HeroWrapper>
        <Container>
          <HeroText>
            <h1>Addicted Developers</h1>
            <span>unidos pelo código_</span>
          </HeroText>
        </Container>
      </HeroWrapper>
    </Layout>
  )
}

export default Index
