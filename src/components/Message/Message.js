import React from "react"
import PropTypes from "prop-types"
import styled, { css } from "styled-components"

const Root = styled.div`
  position: absolute;
  top: 20px;
  left: 0;
  text-align: center;
  width: 100%;
`

const Container = styled.div`
  display: inline-block;
  min-width: 300px;
  padding: 15px 20px;
  border-radius: 5px;
  box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2),
    0px 6px 10px 0px rgba(0, 0, 0, 0.14),
    0px 1px 18px 0px rgba(0, 0, 0, 0.12);

  ${props =>
    props.variant === "info" &&
    css`
      background-color: #90caf9;
    `}
  ${props =>
    props.variant === "success" &&
    css`
      background-color: #43a047;
    `}
  ${props =>
    props.variant === "error" &&
    css`
      background-color: #d32f2f;
    `};
`

function Message({ children, variant }) {
  return (
    <Root>
      <Container variant={variant}>{children}</Container>
    </Root>
  )
}

Message.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(["error", "info", "success"]),
}

Message.defaultProps = {
  variant: "info",
}

export default Message
