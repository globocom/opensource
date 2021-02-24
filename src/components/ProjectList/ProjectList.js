import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import media from "styled-media-query"
import ButtonLink from "@components/ButtonLink"

const ProjectListWrapper = styled.section`
  display: flex;
  flex-direction: column;

  ${media.greaterThan("medium")`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 2rem 3rem;
  `}

  ${media.greaterThan("large")`
    grid-template-columns: repeat(3, 1fr);
  `}
`

const ProjectListButton = styled.div`
  margin: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
`

function ProjectList({ children, hasShowAll }) {
  return (
    <ProjectListWrapper>
      {children}
      {hasShowAll && (
        <ProjectListButton>
          <ButtonLink href="/projetos/">Ver todos</ButtonLink>
        </ProjectListButton>
      )}
    </ProjectListWrapper>
  )
}

ProjectList.propTypes = {
  children: PropTypes.node.isRequired,
  hasShowAll: PropTypes.bool.isRequired,
}

ProjectList.defaultProps = {
  hasShowAll: false,
}

export default ProjectList
