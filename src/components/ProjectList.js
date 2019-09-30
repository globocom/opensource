import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

const ProjectListWrapper = styled.section`
  display: flex;
  flex-direction: column;
`

function ProjectList({ children }) {
  return <ProjectListWrapper>{children}</ProjectListWrapper>
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default ProjectList
