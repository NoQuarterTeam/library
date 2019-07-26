import React, { InputHTMLAttributes, ChangeEvent } from "react"
import { styled, darken } from "../Theme"
import Arrow from "./Arrow"

type Omit<T, K extends string | number | symbol> = {
  [P in Exclude<keyof T, K>]: T[P]
}

export interface SelectProps
  extends Omit<
    InputHTMLAttributes<HTMLInputElement>,
    "onChange" | "value" | "style"
  > {
  value?: number | string | string[] | null | undefined
  onChange?: (value: string) => void
  label?: string
  error?: any
  options: Array<{ label: string; value: string } | string>
  style?: any
  labelStyle?: any
}

export function Select(props: SelectProps) {
  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value
    props.onChange && props.onChange(value)
  }
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
          required={props.required}
          disabled={props.disabled}
          value={props.value || ""}
          hasError={!!props.error}
          isEmpty={props.value === ""}
          onChange={handleChange}
        >
          <option disabled={true} value="">
            {props.placeholder || "Select"}
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

const StyledSelect = styled.select<{ isEmpty: boolean; hasError: boolean }>`
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
  border: 2px solid
    ${p => (p.hasError ? p.theme.colorPrimary : p.theme.colorBackground)};
  background-color: ${p => p.theme.colorBackground};

  &:disabled {
    color: ${p => p.theme.colorTertiary};
  }
  &::placeholder {
    color: ${p => p.theme.colorTertiary};
  }
  &:focus {
    border: 2px solid
      ${p =>
        p.hasError
          ? p.theme.colorPrimary
          : darken(0.1, p.theme.colorBackground)};
  }
`
