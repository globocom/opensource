import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

const ButtonLinkWrapper = styled.a``

function ButtonLink({ children }) {
  return <ButtonLinkWrapper>{children}</ButtonLinkWrapper>
}

ButtonLink.propTypes = {
  children: PropTypes.node.isRequired,
}

export default ButtonLink
