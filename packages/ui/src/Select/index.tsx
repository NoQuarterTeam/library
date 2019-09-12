import React, { InputHTMLAttributes, ChangeEvent } from "react"
import { styled } from "../Theme"
import Arrow from "./Arrow"

type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>

export interface SelectProps
  extends Omit<
    InputHTMLAttributes<HTMLInputElement>,
    "onChange" | "value" | "style"
  > {
  value?: number | string | string[] | null | undefined
  onChange?: (value: string) => void
  label?: string
  error?: any
  options?: Array<{ label: string; value: string } | string> | null
  style?: any
  containerStyle?: any
  labelStyle?: any
}

export function Select(props: SelectProps) {
  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value
    props.onChange && props.onChange(value)
  }
  return (
    <StyledContainer style={props.containerStyle}>
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
          isEmpty={!!!props.value}
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
  padding: ${p => p.theme.space.sm};
`

const StyledLabel = styled.label`
  color: ${p => p.theme.colors.gray[400]};
  font-size: ${p => p.theme.font.size.sm};
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
  color: ${p => (p.isEmpty ? p.theme.colors.gray[400] : p.theme.colors.text)};
  cursor: ${p => (p.disabled ? "default" : "pointer")};
  font-size: ${p => p.theme.font.size.md};
  border-radius: ${p => p.theme.radii.md};
  padding: ${p => p.theme.space.md};
  padding-right: 30px;
  border: 2px solid
    ${p => (p.hasError ? p.theme.colors.warning : p.theme.colors.gray[50])};

  background-color: ${p => p.theme.colors.gray[50]};

  &:disabled {
    color: ${p => p.theme.colors.gray[400]};
  }
  &::placeholder {
    color: ${p => p.theme.colors.gray[400]};
  }
  &:focus {
    border: 2px solid
      ${p => (p.hasError ? p.theme.colors.warning : p.theme.colors.gray[300])};
  }
`
