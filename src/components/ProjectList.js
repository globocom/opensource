import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

import ButtonLink from "./ButtonLink"

const ProjectListWrapper = styled.section`
  display: flex;
  flex-direction: column;
`

const ProjectListButton = styled.div`
  text-align: center;
  margin: 2.5rem;
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
