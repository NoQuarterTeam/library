import React, { ButtonHTMLAttributes } from "react"
import { capitalize } from "@noquarter/utils"

import styled, { css, lighten } from "../Theme"

export type Variant = "block" | "outline" | "text"
export type Color = "primary" | "secondary" | "tertiary"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant
  color?: Color
  loading?: boolean
  disabled?: boolean
  full?: boolean
  style?: any
}

export const Button = ({
  variant = "block",
  color = "primary",
  loading = false,
  disabled = false,
  ...props
}: ButtonProps) => {
  return (
    <StyledButton
      variant={variant}
      color={color}
      loading={loading}
      disabled={loading || disabled}
      {...props}
    >
      {loading ? "Loading" : props.children}
    </StyledButton>
  )
}

const blockStyles = (color: string) => css`
  background-color: ${p => p.theme["color" + capitalize(color)]};
  border: 2px solid ${p => p.theme["color" + capitalize(color)]};
`

const outlineStyled = (color: string) => css`
  background-color: transparent;
  border: 2px solid ${p => lighten(0.1, p.theme["color" + capitalize(color)])};
  color: ${p => p.theme["color" + capitalize(color)]};
`

const textStyles = (color: string) => css`
  background-color: transparent;
  border: transparent;
  color: ${p => p.theme["color" + capitalize(color)]};
`

const getVariantStyles = ({
  color = "primary",
  variant = "block",
}: {
  color?: string
  variant?: string
}) => {
  switch (variant) {
    case "block":
      return blockStyles(color)
    case "outline":
      return outlineStyled(color)
    case "text":
      return textStyles(color)
    default:
      return blockStyles(color)
  }
}

const StyledButton = styled.button<ButtonProps>`
  text-align: center;
  font-size: ${p => p.theme.textM};
  margin: ${p => (p.full ? 0 : p.theme.paddingS)};
  cursor: ${p => (p.disabled ? "default" : "pointer")};
  width: ${p => (!p.full ? "auto" : "100%")};
  color: white;
  letter-spacing: 1px;
  opacity: ${p => (p.disabled ? 0.5 : 1)};
  border-radius: ${p => p.theme.borderRadius};
  padding: ${p => `${p.theme.paddingM} ${p.theme.paddingXL}`};

  &:hover {
    opacity: ${p => (p.disabled ? 0.5 : 0.7)};
  }

  ${p => getVariantStyles({ ...p, ...p.theme })}
`
