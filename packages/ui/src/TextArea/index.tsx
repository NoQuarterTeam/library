import React, { InputHTMLAttributes, ChangeEvent } from "react"
import { styled, darken } from "../Theme"
type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>

export interface TextAreaProps
  extends Omit<
    InputHTMLAttributes<HTMLTextAreaElement>,
    "onChange" | "value" | "style"
  > {
  error?: boolean
  label?: string
  style?: any
  rows?: number
  onChange?: (value: string) => void
  value?: number | string | string[] | null | undefined
  id?: string
}

export const TextArea = ({ label, ...props }: TextAreaProps) => {
  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value
    props.onChange && props.onChange(value)
  }
  return (
    <StyledContainer>
      {label && <StyledLabel htmlFor={props.id}>{label}</StyledLabel>}
      <div style={{ position: "relative" }}>
        <StyledInput
          {...props}
          onChange={handleChange}
          value={props.value || ""}
          hasError={props.error}
        />
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

const StyledInput = styled.textarea<{ hasError?: boolean }>`
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
  border: 2px solid
    ${p => (p.hasError ? p.theme.colorWarning : p.theme.colorBackground)};
  background-color: ${p => p.theme.colorBackground};

  &::placeholder {
    color: ${p => p.theme.colorLabel};
  }

  &:focus {
    border: 2px solid
      ${p =>
        p.hasError
          ? p.theme.colorWarning
          : darken(0.1, p.theme.colorBackground)};
  }
`
