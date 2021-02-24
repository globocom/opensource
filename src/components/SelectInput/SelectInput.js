import React from "react"
import styled, { css } from "styled-components"

import ArrowDownIcon from "@icons/ArrowDown"
import Colors from "@constants/colors"

const Root = styled.div`
  margin-bottom: 20px;
`

const Label = styled.label`
  font-weight: 700;
  margin-bottom: 1rem;
  display: inline-block;
`

const Select = styled.select`
  width: 100%;
  border: 2px solid #cfd3d4;
  font-family: "Open Sans", sans-serif;
  border-radius: 6px;
  padding: 16px;
  padding-right: 40px;
  font-size: 1.2rem;
  background-color: white;
  outline: none;
  -webkit-appearance: none;
  transition: border-color 0.5s;
  cursor: pointer;

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

const SelectRoot = styled.div`
  position: relative;
`

const SelectIcon = styled.i`
  position: absolute;
  top: calc(50% - 16px);
  right: 4px;
  color: #cfd3d4;

  svg {
    width: 36px;
    height: 36px;
    fill: currentColor;
    pointer-events: none;
  }
`

const ErrorText = styled.span`
  font-size: 12px;
  margin: 10px 5px 0;
  color: #d32f2f;
  display: inline-block;
`

function SelectInput({ children, label, errorText, ...inputProps }) {
  return (
    <Root>
      {label && <Label>{label}</Label>}
      <SelectRoot>
        <Select {...inputProps}>{children}</Select>
        <SelectIcon>
          <ArrowDownIcon />
        </SelectIcon>
      </SelectRoot>
      {errorText && <ErrorText>{errorText}</ErrorText>}
    </Root>
  )
}

export default SelectInput
