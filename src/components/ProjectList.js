import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import media from "styled-media-query"

import ButtonLink from "./ButtonLink"

const ProjectListWrapper = styled.section`
  display: flex;
  flex-direction: column;

  ${media.greaterThan("medium")`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 40px;
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
      <ProjectListButton>
        {hasShowAll && <ButtonLink href="/projetos/">Ver todos</ButtonLink>}
      </ProjectListButton>
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
