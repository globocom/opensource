import React from "react"
import PropTypes from "prop-types"
import styled, { keyframes } from "styled-components"

const blink = keyframes`
  0% {opacity: 0;}
  25% {opacity: .25;}
  50% {opacity: .5;}
  75% {opacity: .75;}
  100% {opacity: 1;}
`

const Root = styled.div`
  font-family: Hack, monospace;
  font-size: 0.875rem;

  i {
    animation: ${blink} 1s linear infinite;
    margin-left: 2px;
  }
`

function Loading({ children }) {
  return (
    <Root>
      {children || "Carregando"}
      <i>_</i>
    </Root>
  )
}

Loading.propTypes = {
  children: PropTypes.node,
}

export default Loading
