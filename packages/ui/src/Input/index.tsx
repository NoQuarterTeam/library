import React, { InputHTMLAttributes, forwardRef, Ref } from "react"
import styled, { darken } from "../Theme"

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  style?: any
  prefix?: string
}

export const Input = forwardRef(
  (
    { label, prefix = "", ...inputProps }: InputProps,
    ref: Ref<HTMLInputElement>,
  ) => {
    return (
      <StyledContainer>
        {label && <StyledLabel htmlFor={inputProps.id}>{label}</StyledLabel>}
        <div>
          {prefix && <StyledPrefix>{prefix}</StyledPrefix>}
          <StyledInput
            id={inputProps.id}
            ref={ref}
            hasPrefix={!!prefix}
            {...inputProps}
          />
        </div>
      </StyledContainer>
    )
  },
)

const StyledContainer = styled.div`
  width: 100%;
  margin: ${p => p.theme.paddingS};
`

const StyledLabel = styled.label`
  color: ${p => p.theme.colorLabel};
  font-size: ${p => p.theme.textS};
`

const StyledInput = styled.input<{ hasPrefix?: boolean }>`
  border: 0;
  width: 100%;
  outline: 0;
  background-color: transparent;
  transition: all 200ms;
  appearance: none;
  border-radius: ${p => p.theme.borderRadius};
  color: ${p => p.theme.colorText};
  font-size: ${p => p.theme.textM};
  padding: ${p => p.theme.paddingM};
  ${p => p.hasPrefix && "padding-left: 16px"};
  ${p => p.type === "date" && "padding-bottom: 7px"};
  border: 1px solid ${p => p.theme.colorBackground};
  background-color: ${p => p.theme.colorBackground};

  &::placeholder {
    color: ${p => p.theme.colorTertiary};
  }

  &:focus {
    border: 1px solid ${p => darken(0.1, p.theme.colorBackground)};
  }
`

const StyledPrefix = styled.span`
  position: absolute;
  left: 0;
  top: 11px;
  color: ${p => p.theme.colorLabel};
`
