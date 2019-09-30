import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

import ButtonLink from "./ButtonLink"

const ProjectListWrapper = styled.section`
  display: flex;
  flex-direction: column;
`

function ProjectList({ children, hasShowAll }) {
  return (
    <ProjectListWrapper>
      {children}
      {hasShowAll && <ButtonLink href="/projects/">Ver todos</ButtonLink>}
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
