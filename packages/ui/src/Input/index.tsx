import React, { InputHTMLAttributes, forwardRef, Ref, ChangeEvent } from "react"
import { styled, darken } from "../Theme"

type Omit<T, K extends string | number | symbol> = {
  [P in Exclude<keyof T, K>]: T[P]
}

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
      <StyledContainer>
        {label && <StyledLabel htmlFor={props.id}>{label}</StyledLabel>}
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
  padding: ${p => p.theme.paddingS};
`

const StyledLabel = styled.label`
  color: ${p => p.theme.colorLabel};
  font-size: ${p => p.theme.textS};
`

const StyledInput = styled.input<{ hasPrefix?: boolean; hasError?: boolean }>`
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
  border: 2px solid
    ${p => (p.hasError ? p.theme.colorWarning : p.theme.colorBackground)};
  background-color: ${p => p.theme.colorBackground};

  &::placeholder {
    color: ${p => p.theme.colorTertiary};
  }

  &:focus {
    border: 2px solid
      ${p =>
        p.hasError
          ? p.theme.colorWarning
          : darken(0.1, p.theme.colorBackground)};
  }
`

const StyledPrefix = styled.span`
  position: absolute;
  left: 0;
  top: 11px;
  color: ${p => p.theme.colorLabel};
`
