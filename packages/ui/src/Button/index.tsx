import React, { ButtonHTMLAttributes } from "react"
import { capitalize } from "../utils"

import { styled, css, ThemeInterface, transparentize } from "../Theme"

export type Variant = "block" | "outline" | "text"
export type Color = "primary" | "secondary" | "tertiary"
export type Size = "small" | "large"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant
  color?: Color
  loading?: boolean
  disabled?: boolean
  size?: Size
  full?: boolean
  style?: any
}

export function Button({
  variant = "block",
  color = "primary",
  type = "submit",
  size = "large",
  loading = false,
  disabled = false,
  ...props
}: ButtonProps) {
  return (
    <StyledContainer full={props.full}>
      <StyledButton
        variant={variant}
        color={color}
        type={type}
        size={size}
        disabled={loading || disabled}
        {...props}
      >
        {loading ? "Loading" : props.children}
      </StyledButton>
    </StyledContainer>
  )
}

const StyledContainer = styled.div<{ full?: boolean }>`
  padding: ${p => p.theme.paddingS};
  width: ${p => (!p.full ? "auto" : "100%")};
`

const blockStyles = (color: string) => css`
  background-color: ${p =>
    p.theme[("color" + capitalize(color)) as keyof ThemeInterface]};
  border: 2px solid
    ${p => p.theme[("color" + capitalize(color)) as keyof ThemeInterface]};
`

const outlineStyled = (color: string) => css`
  background-color: transparent;
  border: 2px solid
    ${p => p.theme[("color" + capitalize(color)) as keyof ThemeInterface]};
  color: ${p => p.theme[("color" + capitalize(color)) as keyof ThemeInterface]};
`

const textStyles = (color: string, disabled: boolean) => css`
  background-color: transparent;
  border: 2px solid transparent;
  color: ${p => p.theme[("color" + capitalize(color)) as keyof ThemeInterface]};

  &:hover {
    ${p =>
      !disabled &&
      `background-color: ${transparentize(0.9, p.theme[
        ("color" + capitalize(color)) as keyof ThemeInterface
      ] as string)}`};
  }
`

const getVariantStyles = ({
  color = "primary",
  variant = "block",
  disabled = false,
}: ThemeInterface & ButtonProps) => {
  switch (variant) {
    case "block":
      return blockStyles(color)
    case "outline":
      return outlineStyled(color)
    case "text":
      return textStyles(color, disabled)
    default:
      return blockStyles(color)
  }
}

const StyledButton = styled.button<ButtonProps>`
  text-align: center;
  color: white;
  letter-spacing: 1px;
  line-height: 20px;
  padding: ${p => p.theme.paddingS};
  transition: 200ms all;
  font-size: ${p => p.theme.textM};
  cursor: ${p => (p.disabled ? "default" : "pointer")};
  width: 100%;
  opacity: ${p => (p.disabled ? 0.5 : 1)};
  border-radius: ${p => p.theme.borderRadius};
  ${p => p.theme.flexCenter};
  padding: ${p =>
    p.size === "large"
      ? `${p.theme.paddingM} ${p.theme.paddingXL}`
      : `${p.theme.paddingS} ${p.theme.paddingL}`};

  &:hover {
    opacity: ${p => (p.disabled ? 0.5 : 0.7)};
  }

  ${p => getVariantStyles({ ...p, ...p.theme })}
`
