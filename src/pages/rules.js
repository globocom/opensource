import React from "react"
import styled from "styled-components"
import media from "styled-media-query"

import Seo from "@components/Seo"
import Layout, { Container } from "@components/Layout"
import ButtonLink from "@components/ButtonLink"

import { getIssuesUrl } from "@services/github"

import BGImage from "@images/2020/background.png"

const issuesUrl = getIssuesUrl()

const BGColor = "#201c24"

const Rules = styled.section`
  color: #fff;
  line-height: 1.2rem;
  h1 {
    font-weight: bold;
    font-size: 2rem;
    margin: 50px 0;
  }
  h2 {
    font-weight: bold;
    font-size: 1.5rem;
    margin: 20px 0;
  }
  img {
    max-width: 350px;
    margin: 0 auto;
    display: block;
    width: 100%;
  }
  ul {
    list-style-type: circle;
    li {
      margin-left: 20px;
    }
  }
`

const Projects = styled.section`
  padding-top: 5rem;
  padding-bottom: 5rem;
  color: #fff;
  text-align: center;
`

const ProjectsTitle = styled.div`
  font-weight: bolder;
  font-size: 2.25rem;

  ${media.greaterThan("medium")`
    font-size: 4rem;
  `}
`

const ProjectsText = styled.div`
  text-align: center;
  line-height: 1.75rem;
  padding: 2.5rem 0;

  strong {
    font-weight: 700;
  }
`

function RulesPage() {
  return (
    <Layout
      darkHeader={true}
      darkFooter={true}
      backgroundImage={BGImage}
      noPadding={true}
      backgroundColor={BGColor}
    >
      <Seo
        title="Hacktoberfest"
        description="Regras &amp; Valores - De 1 a 31 de outubro, contribua com qualquer projeto da Globo no github e ganhe uma camiseta exclusiva."
      />
      <Container>
        <Rules>
          <img
            class="astronaut"
            src="/static/astronauta-beb845f8bafaefea8f85eb5d23515eec.png"
            alt="Hacktoberfest Art"
          />
          <h1>Regras &amp; Valores!</h1>
          <h2>1 Todos são bem vindos!</h2>
          Os participantes do Hacktoberfest representaram 151 países e reuniu
          milhares de habilidades únicas. Damos as boas-vindas a todos que já
          fazem parte da comunidade de software de código aberto e todos que
          estão interessados em mergulhar nesse universo.
          <h2>2 A quantidade é divertida, a qualidade é a chave.</h2>
          Participar do Hacktoberfest leva ao crescimento pessoal, oportunidades
          profissionais e construção de comunidade. No entanto, tudo começa com
          contribuições significativas para o software de código aberto.
          <h2>3 Ação de curto prazo, impacto de longo prazo.</h2>
          Na comunidade de software de código aberto, estamos nos apoiando nos
          ombros daqueles que vieram antes de nós. Sua participação tem um
          efeito duradouro nas pessoas e na tecnologia, muito depois de outubro.
          Esta é uma viagem, não uma corrida.
          <h2>Regras de participação.</h2>
          Para obter uma camisa, você deve ter dois pull requests (PRs) enviados
          e pelo menos um aprovado entre 1 e 31 de outubro. Os pull requests
          podem ser feitos em qualquer repositório dos projetos open source da
          Globo, não apenas para aqueles destacados. O PR deve conter
          confirmações que você mesmo fez. Se um mantenedor reportar seu PR como
          spam, o mesmo não será contabilizado para sua participação no
          Hacktoberfest. Se um mantenedor reportar um comportamento que não
          esteja de acordo com o código de conduta do projeto, você não poderá
          participar.
          <h2>Padrões de qualidade</h2>
          Em linha com o segundo valor do Hacktoberfest (quantidade é divertida,
          qualidade é fundamental), fornecemos exemplos de PR's que consideramos
          contribuições de baixa qualidade, as quais são desencorajadas.
          <ul>
            <li>
              PR's que não adicionam valor (por exemplo, scripts para remover
              espaços em branco / corrigir erros de digitação / otimizar imagens
              / comentários / pequenas traduções / docstrings / documentações
              pouco relevantes).
            </li>
            <li>
              PR's que causam interrupções (por exemplo, pegar o branch /
              commits de outra pessoa e fazer um PR).
            </li>
            <li>
              PR's que são considerados, pelo mantenedor, um dificultador.
            </li>
            <li>
              Algo que é claramente uma tentativa de simplesmente marcar com +1
              sua contagem de PR.
            </li>
          </ul>
        </Rules>
      </Container>
      <Projects>
        <Container>
          <ProjectsTitle>Projetos</ProjectsTitle>
          <ProjectsText>
            Pull requests podem ser feitos em qualquer <strong>projeto</strong>{" "}
            da Globo
          </ProjectsText>
          <ButtonLink dark={true} href={issuesUrl} blank={true}>
            Ver issues
          </ButtonLink>
        </Container>
      </Projects>
    </Layout>
  )
}

export default RulesPage
