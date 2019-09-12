import React, { InputHTMLAttributes, forwardRef, Ref, ChangeEvent } from "react"
import { styled } from "../Theme"

type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>

export interface InputProps
  extends Omit<
    InputHTMLAttributes<HTMLInputElement>,
    "onChange" | "value" | "style" | "prefix"
  > {
  error?: boolean
  label?: string
  style?: any
  prefix?: string
  onChange?: (value: string) => void
  value?: number | string | string[] | null | undefined
  id?: string
  labelStyle?: any
  containerStyle?: any
}

export const Input = forwardRef(
  (
    { label, prefix = "", ...props }: InputProps,
    ref: Ref<HTMLInputElement>,
  ) => {
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
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
          {prefix && <StyledPrefix>{prefix}</StyledPrefix>}
          <StyledInput
            {...props}
            onChange={handleChange}
            value={props.value || ""}
            hasError={props.error}
            ref={ref}
            hasPrefix={!!prefix}
          />
        </div>
      </StyledContainer>
    )
  },
)

const StyledContainer = styled.div`
  width: 100%;
  padding: ${p => p.theme.space.sm};
`

const StyledLabel = styled.label`
  color: ${p => p.theme.colors.gray[400]};
  font-size: ${p => p.theme.font.size.sm};
`

const StyledInput = styled.input<{ hasPrefix?: boolean; hasError?: boolean }>`
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
  ${p => p.hasPrefix && "padding-left: 32px"};
  ${p => p.type === "date" && "padding-bottom: 7px"};
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

const StyledPrefix = styled.span`
  position: absolute;
  left: 17px;
  top: 9px;
  color: ${p => p.theme.colors.gray[400]};
`
