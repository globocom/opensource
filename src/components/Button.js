import React from "react"
import PropTypes from "prop-types"
import styled, { css } from "styled-components"
import media from "styled-media-query"

const ButtonWrapper = styled.button`
  height: 56px;
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  border-radius: 36px;
  border: 2px solid #000;
  transition: all 0.3s;
  padding: 1rem 2.3rem;
  font-weight: 600;
  white-space: nowrap;
  outline: 0;
  -webkit-appearance: none;
  -webkit-tap-highlight-color: transparent;
  font-size: inherit;
  font-family: inherit;

  ${props =>
    props.dark
      ? css`
          color: #fff;
          border-color: #fff;
          background-color: transparent;
        `
      : css`
          color: #000;
          border-color: #000;
          background-color: #fff;
        `}

  &:hover {
    ${media.greaterThan("large")`
      border-color: #59b8fd;
      background-color: #59b8fd;
      color: #fff;
    `}
  }
`

function Button({ children, dark }) {
  return <ButtonWrapper dark={dark}>{children}</ButtonWrapper>
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  dark: PropTypes.bool,
}

Button.defaultProps = {
  dark: false,
}

export default Button
export { ButtonWrapper }
