import React from "react"
import styled from "styled-components"

import Layout from "../components/Layout"
import HacktoberCall from "../components/HacktoberCall"
import { Container } from "../styles/grid"

const Rules = styled.section`
  display: flex;
  flex-direction: column;
  color: #cfd3d4;
`

const Rule = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-bottom: 6rem;
`

const RuleIcon = styled.div`
  display: flex;
  align-items: center;
  font-weight: 600;
  font-size: 3.75rem;
  margin-bottom: 2.5rem;

  span {
    margin-right: 1.2rem;
  }
`

const RuleText = styled.div`
  text-align: center;
  line-height: 1.75rem;

  strong {
    font-weight: 700;
  }
`

function Hacktoberfest() {
  return (
    <Layout
      darkHeader={true}
      darkFooter={true}
      darkBody={true}
      noPadding={true}
    >
      <HacktoberCall />
      <Container>
        <Rules>
          <Rule>
            <RuleIcon>
              <span>2</span>
              <svg
                width="60"
                height="76"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  clipRule="evenodd"
                  d="M10.72 18.441a7.72 7.72 0 1 0 0-15.44 7.72 7.72 0 0 0 0 15.44zM10.72 73a7.72 7.72 0 1 0 0-15.441 7.72 7.72 0 0 0 0 15.441zM49.838 53.441a7.72 7.72 0 1 0 0-15.441 7.72 7.72 0 0 0 0 15.441z"
                  stroke="#CFD3D4"
                  strokeWidth="5"
                />
                <path fill="#CFD3D4" d="M9.176 18.441h4.118v39.118H9.176z" />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12.318 21.53c.03.256.492 1.073.518 1.324 1.59 15.415 11.03 21.289 29.281 19.86v4.55c-18.316-.528-22.282-1.47-29.752-10.879 0 0-1.551-2.206-3.189-9.56l3.142-5.296z"
                  fill="#CFD3D4"
                />
              </svg>
            </RuleIcon>
            <RuleText>
              Contribua com <strong>dois pull requests</strong>
              <br /> em qualquer projeto Open Source
              <br /> da Globo.com durante o<br /> mês de outubro.
            </RuleText>
          </Rule>
          <Rule>
            <RuleIcon>
              <svg
                width="98"
                height="70"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M30.933 62.357L3.694 35.385 0 39.045 30.933 70 97.337 3.55 93.467 0 30.933 62.357z"
                  fill="#CFD3D4"
                />
              </svg>
            </RuleIcon>
            <RuleText>
              Garanta que pelo menos <strong>um</strong>
              <br /> pull request seja <strong>ACEITO</strong>.
            </RuleText>
          </Rule>
          <Rule>
            <RuleIcon>
              <svg
                width="84"
                height="70"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M50.577 0h8.72L83.71 14l-6.974 19.25-10.464-3.5V70H17.441V29.75l-10.464 3.5L0 14 24.416 0h8.72c0 4.826 3.912 8.75 8.72 8.75 4.807 0 8.721-3.924 8.721-8.75zm16.764 26.46l7.234 2.414 4.806-13.232L58.347 3.608h-4.806c-1.498 5.043-6.162 8.72-11.686 8.72-5.522 0-10.188-3.677-11.687-8.72h-4.805L4.33 15.642l4.806 13.232 7.233-2.414 4.585-1.532v41.464h41.802V24.928l4.585 1.532z"
                  fill="#CFD3D4"
                />
              </svg>
            </RuleIcon>
            <RuleText>
              Os <strong>100 primeiros inscritos</strong> ganharão uma
              <br /> camiseta exclusiva a ser entregue dentro
              <br /> do território brasileiro.
            </RuleText>
          </Rule>
        </Rules>
      </Container>
    </Layout>
  )
}

export default Hacktoberfest
