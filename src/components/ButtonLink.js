import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

import { ButtonWrapper } from "./Button"

const ButtonLinkWrapper = styled(ButtonWrapper).attrs({
  as: "a",
})``

function ButtonLink({ children, href }) {
  return <ButtonLinkWrapper href={href}>{children}</ButtonLinkWrapper>
}

ButtonLink.propTypes = {
  children: PropTypes.node.isRequired,
  href: PropTypes.string,
}

export default ButtonLink
