import React, { InputHTMLAttributes } from "react"
import { styled, lighten, transparentize } from "../Theme"

export function Radio(props: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <StyledLabel htmlFor={props.id}>
      <HiddenInput type="radio" {...props} />
      <StyledRadio />
    </StyledLabel>
  )
}

const HiddenInput = styled.input`
  opacity: 0;
  border: 0;
  height: 0;
  width: 0;
  margin: 0;
  position: absolute;
`

const StyledLabel = styled.label`
  position: relative;
  user-select: none;
  cursor: pointer;

  ${HiddenInput} {
    &:checked ~ div:after {
      opacity: 1;
    }
  }

  ${HiddenInput} {
    &:focus ~ div {
      border: 2px solid ${p => p.theme.colors.primary};
    }
  }
`

const StyledRadio = styled.div`
  height: 26px;
  width: 26px;
  border-radius: 50%;
  border: 2px solid ${p => lighten(0.25, p.theme.colors.primary)};
  ${p => p.theme.helpers.flex.center};

  &:hover {
    border: 2px solid ${p => p.theme.colors.primary};
  }

  &::after {
    content: "";
    transition: all 200ms;
    opacity: 0;
    top: 4px;
    left: 4px;
    width: 14px;
    height: 14px;
    border-radius: 50%;
    box-shadow: 0 0 5px 0 ${p => transparentize(0.5, p.theme.colors.primary)};
    background-color: ${p => p.theme.colors.primary};
  }
`
