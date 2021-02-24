import React, { useState, useEffect } from "react"
import styled from "styled-components"
import media from "styled-media-query"

import Seo from "@components/Seo"
import Layout, { Container } from "@components/Layout"
import HacktoberFestCall from "@components/HacktoberFestCall"
import ButtonLink from "@components/ButtonLink"

import PullRequestIcon from "@icons/PullRequest"
import MergedIcon from "@icons/Merged"
import TShirtIcon from "@icons/TShirt"

import { getUser } from "@services/api"
import { getIssuesUrl } from "@services/github"

import BGImage from "@images/2020/background.png"

const issuesUrl = getIssuesUrl()

const BGColor = "#201c24"

const Rules = styled.section`
  display: flex;
  flex-direction: column;
  color: #cfd3d4;

  ${media.greaterThan("medium")`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  `}
`

const Rule = styled.div`
  display: flex;
  align-items: center;
  justify-content: baseline;
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

function HacktoberFestPage() {
  const [user, setUser] = useState()

  useEffect(() => {
    async function fetchUser() {
      const user = await getUser()
      setUser(user)
    }
    fetchUser()
  }, [])

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
        description="De 1 a 31 de outubro, contribua com qualquer projeto da Globo no github e ganhe uma camiseta exclusiva."
      />
      <HacktoberFestCall user={user} />
      <Container>
        <Rules>
          <Rule>
            <RuleIcon>
              <span>2</span>
              <PullRequestIcon />
            </RuleIcon>
            <RuleText>
              Contribua com <strong>dois pull requests</strong>
              <br /> em qualquer projeto Open Source
              <br /> da Globo durante o<br /> mês de outubro.
            </RuleText>
          </Rule>
          <Rule>
            <RuleIcon>
              <MergedIcon />
            </RuleIcon>
            <RuleText>
              Garanta que pelo menos <strong>um</strong>
              <br /> pull request seja <strong>ACEITO</strong>.
            </RuleText>
          </Rule>
          <Rule>
            <RuleIcon>
              <TShirtIcon />
            </RuleIcon>
            <RuleText>
              Os <strong>100 primeiros inscritos</strong>,
              <br /> que completarem os requisitos mínimos,
              <br /> ganharão uma camiseta exclusiva a ser
              <br /> entregue dentro do território brasileiro.
            </RuleText>
          </Rule>
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

export default HacktoberFestPage
