import React from "react"
import PropTypes from "prop-types"
import styled, { css } from "styled-components"
import Colors from "@constants/colors"

const Root = styled.div`
  margin-bottom: 20px;
`

const Label = styled.label`
  font-weight: 700;
  margin-bottom: 1rem;
  display: inline-block;
`

const Input = styled.input`
  width: 100%;
  border: 2px solid #cfd3d4;
  font-family: "Open Sans", sans-serif;
  border-radius: 6px;
  padding: 16px;
  font-size: 1.2rem;
  background-color: white;
  outline: none;
  -webkit-appearance: none;
  transition: border-color 0.5s;

  ${props =>
    props.hasError &&
    css`
      border-color: #d32f2f;
    `}

  &:focus,
  &:hover {
    border-color: ${Colors.PRIMARY_COLOR};
  }
`

const ErrorText = styled.span`
  font-size: 12px;
  margin: 10px 5px 0;
  color: #d32f2f;
  display: inline-block;
`

function TextInput({ label, errorText, ...inputProps }) {
  return (
    <Root>
      {label && <Label>{label}</Label>}
      <Input hasError={Boolean(errorText)} {...inputProps} />
      {errorText && <ErrorText>{errorText}</ErrorText>}
    </Root>
  )
}

TextInput.propTypes = {
  label: PropTypes.string,
  errorText: PropTypes.string,
}

export default TextInput
