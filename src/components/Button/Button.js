import React from "react"
import PropTypes from "prop-types"
import styled, { css } from "styled-components"
import media from "styled-media-query"
import Colors from "@constants/colors"

const ButtonWrapper = styled.button`
  height: 56px;
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  border-radius: 36px;
  border: 2px solid #000;
  padding: 1rem 2.3rem;
  font-weight: 600;
  white-space: nowrap;
  outline: 0;
  -webkit-appearance: none;
  -webkit-tap-highlight-color: transparent;
  font-size: inherit;
  font-family: inherit;
  transition: all 0.5s ease 0s;

  ${props =>
    props.dark
      ? css`
          color: #fff;
          border-color: ${Colors.PRIMARY_COLOR};
          background-color: ${Colors.PRIMARY_COLOR};
        `
      : css`
          color: #fff;
          border-color: ${Colors.PRIMARY_COLOR};
          background-color: ${Colors.PRIMARY_COLOR};
        `}

  &:hover {
    ${media.greaterThan("large")`
      border-color: ${Colors.PRIMARY_COLOR_DARKER};
      background-color: ${Colors.PRIMARY_COLOR_DARKER};
      color: #fff;
    `}
  }
`

function Button({ children, dark, ...buttonProps }) {
  return (
    <ButtonWrapper dark={dark} {...buttonProps}>
      {children}
    </ButtonWrapper>
  )
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
