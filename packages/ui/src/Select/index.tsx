import React, { InputHTMLAttributes } from "react"
import { styled, darken } from "../Theme"
import Arrow from "./Arrow"

interface SelectProps extends InputHTMLAttributes<HTMLInputElement> {
  value: string | number
  onChange: (e: any) => void
  label?: string
  options: Array<{ label: string; value: string } | string>
  style?: any
  labelStyle?: any
}

export function Select(props: SelectProps) {
  props.options && props.options.map(a => a)
  return (
    <StyledContainer>
      {props.label && (
        <StyledLabel htmlFor={props.id} style={props.labelStyle}>
          {props.label}
        </StyledLabel>
      )}
      <div>
        <StyledSelect
          style={props.style}
          id={props.id}
          disabled={props.disabled}
          value={props.value}
          isEmpty={props.value === -1}
          onChange={props.onChange}
        >
          <option value={-1} disabled={true}>
            Select
          </option>
          {props.options &&
            props.options.map(option => {
              if (typeof option === "string") {
                return (
                  <option key={option} value={option}>
                    {option}
                  </option>
                )
              } else {
                return (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                )
              }
            })}
        </StyledSelect>
        <StyledSelectIcon />
      </div>
    </StyledContainer>
  )
}

const StyledContainer = styled.div`
  width: 100%;
  padding: ${p => p.theme.paddingS};
`

const StyledLabel = styled.label`
  color: ${p => p.theme.colorLabel};
  font-size: ${p => p.theme.textS};
`

const StyledSelectIcon = styled(Arrow)`
  position: absolute;
  top: 50%;
  pointer-events: none;
  transform: translateY(-50%);
  right: 12px;
`

const StyledSelect = styled.select<{ isEmpty: boolean }>`
  position: relative;
  border: 0;
  width: 100%;
  min-width: 140px;
  outline: 0;
  border-radius: 0;
  appearance: none;
  color: ${p => (p.isEmpty ? p.theme.colorTertiary : p.theme.colorText)};
  cursor: ${p => (p.disabled ? "default" : "pointer")};
  font-size: ${p => p.theme.textM};
  border-radius: ${p => p.theme.borderRadius};
  padding: ${p => p.theme.paddingM};
  padding-right: 30px;
  border: 2px solid ${p => p.theme.colorBackground};
  background-color: ${p => p.theme.colorBackground};

  &:disabled {
    color: ${p => p.theme.colorTertiary};
  }
  &::placeholder {
    color: ${p => p.theme.colorTertiary};
  }

  &:focus {
    border: 2px solid ${p => darken(0.1, p.theme.colorBackground)};
  }
`
