import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

import { ButtonWrapper } from "@components/Button"

const ButtonLinkWrapper = styled(ButtonWrapper).attrs({
  as: "a",
})``

function ButtonLink({ children, href, dark, blank, anchorProps }) {
  const elProps = { ...(anchorProps || {}) }

  if (blank) {
    elProps.target = "_blank"
    elProps.rel = "noopener noreferrer"
  }

  return (
    <ButtonLinkWrapper href={href} dark={dark} {...elProps}>
      {children}
    </ButtonLinkWrapper>
  )
}

ButtonLink.propTypes = {
  children: PropTypes.node.isRequired,
  dark: PropTypes.bool,
  href: PropTypes.string,
  blank: PropTypes.bool,
  anchorProps: PropTypes.object,
}

ButtonLink.defaultProps = {
  blank: false,
}

export default ButtonLink
