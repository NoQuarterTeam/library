import React, { InputHTMLAttributes, ChangeEvent } from "react"
import { styled } from "../Theme"
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
  labelStyle?: any
  containerStyle?: any
}

export const TextArea = ({ label, ...props }: TextAreaProps) => {
  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value
    props.onChange && props.onChange(value)
  }
  return (
    <StyledContainer style={props.containerStyle}>
      {label && (
        <StyledLabel htmlFor={props.id} style={props.labelStyle}>
          {label}
        </StyledLabel>
      )}
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
  padding: ${p => p.theme.space.sm};
`

const StyledLabel = styled.label`
  color: ${p => p.theme.colors.gray[400]};
  font-size: ${p => p.theme.font.size.sm};
`

const StyledInput = styled.textarea<{ hasError?: boolean }>`
  border: 0;
  width: 100%;
  outline: 0;
  background-color: transparent;
  transition: all 200ms;
  appearance: none;
  border-radius: ${p => p.theme.radii.md};
  color: ${p => p.theme.colors.text};
  font-size: ${p => p.theme.font.size.md};
  padding: ${p => p.theme.space.md};
  border: 2px solid
    ${p => (p.hasError ? p.theme.colors.warning : p.theme.colors.gray[50])};
  background-color: ${p => p.theme.colors.gray[50]};

  &::placeholder {
    color: ${p => p.theme.colors.gray[400]};
  }

  &:focus {
    border: 2px solid
      ${p => (p.hasError ? p.theme.colors.warning : p.theme.colors.gray[300])};
  }
`
