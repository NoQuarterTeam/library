import React, { ButtonHTMLAttributes } from "react"
import { capitalize } from "../utils"

import { styled, css, lighten, ThemeInterface } from "../Theme"

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
        loading={loading}
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

const blockStyles = (color: keyof ThemeInterface) => css`
  background-color: ${p => p.theme[color]};
  border: 2px solid ${p => p.theme[color]};
`

const outlineStyled = (color: keyof ThemeInterface) => css`
  background-color: transparent;
  border: 2px solid ${p => lighten(0.1, p.theme[color] as string)};
  color: ${p => p.theme[color]};
`

const textStyles = (color: keyof ThemeInterface) => css`
  background-color: transparent;
  border: transparent;
  color: ${p => p.theme[color]};
`

const getVariantStyles = ({
  color = "primary",
  variant = "block",
}: {
  color?: Color
  variant?: Variant
}) => {
  const themeColor = ("color" + capitalize(color)) as keyof ThemeInterface
  switch (variant) {
    case "block":
      return blockStyles(themeColor)
    case "outline":
      return outlineStyled(themeColor)
    case "text":
      return textStyles(themeColor)
    default:
      return blockStyles(themeColor)
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
