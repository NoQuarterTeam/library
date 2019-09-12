import React, { ButtonHTMLAttributes } from "react"

import { styled, css, ThemeInterface, lighten, transparentize } from "../Theme"

export type Variant = "block" | "outline" | "text"
export type Color = string
export type Size = "small" | "large"

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant
  color?: Color
  loading?: boolean
  disabled?: boolean
  size?: Size
  full?: boolean
  style?: any
  containerStyle?: any
}

export function Button({
  variant = "block",
  color = "primary",
  type = "submit",
  size = "large",
  loading = false,
  disabled = false,
  containerStyle,
  ...props
}: ButtonProps) {
  let actualColor = color
  let colorScale
  if (actualColor.includes(".")) {
    actualColor = color.split(".")[0]
    colorScale = parseInt(color.split(".")[1])
  }

  return (
    <StyledContainer full={props.full} style={containerStyle}>
      <StyledButton
        full={props.full}
        variant={variant}
        color={actualColor}
        colorScale={colorScale}
        type={type}
        size={size}
        style={props.style}
        disabled={loading || disabled}
        {...props}
      >
        {loading ? "Loading" : props.children}
      </StyledButton>
    </StyledContainer>
  )
}

const StyledContainer = styled.div<{ full?: boolean }>`
  width: ${p => (!p.full ? "auto" : "100%")};
  padding: ${p => p.theme.space.sm};
`

type ColorProps = { colorScale?: number; color: string }

type StyleProps = ThemeInterface & ButtonProps & ColorProps

const blockStyles = (props: StyleProps) => {
  // @ts-ignore
  const color: string = props.colorScale
    ? props.colors[props.color][props.colorScale]
    : props.colors[props.color]

  return css`
    border: 2px solid ${props.disabled ? lighten(0.08, color) : color};
    background-color: ${props.disabled ? lighten(0.08, color) : color};

    &:hover {
      border: 2px solid ${lighten(0.08, color)};
      background-color: ${lighten(0.08, color)};
    }
  `
}

const outlineStyled = (props: StyleProps) => {
  // @ts-ignore
  const color: string = props.colorScale
    ? props.colors[props.color][props.colorScale]
    : props.colors[props.color]

  return css`
    background-color: ${props.colors.transparent};
    border: 2px solid ${props.disabled ? lighten(0.08, color) : color};
    color: ${props.disabled ? lighten(0.08, color) : color};

    ${props.disabled && "opacity: 0.9"};

    &:hover {
      background-color: ${props.disabled
        ? props.colors.transparent
        : transparentize(0.9, color)};
    }
  `
}

const textStyles = (props: StyleProps) => {
  // @ts-ignore
  const color: string = props.colorScale
    ? props.colors[props.color][props.colorScale]
    : props.colors[props.color]

  return css`
    background-color: ${props.colors.transparent};
    border: 2px solid ${props.colors.transparent};
    color: ${props.disabled ? lighten(0.08, color) : color};

    &:hover {
      ${!props.disabled && `background-color: ${transparentize(0.9, color)}`};
    }
  `
}

const getVariantStyles = ({ variant = "block", ...props }: StyleProps) => {
  switch (variant) {
    case "block":
      return blockStyles({ variant, ...props })
    case "outline":
      return outlineStyled({ variant, ...props })
    case "text":
      return textStyles({ variant, ...props })
    default:
      return blockStyles({ variant, ...props })
  }
}

const StyledButton = styled.button<ButtonProps & ColorProps>`
  text-align: center;
  letter-spacing: ${p => p.theme.font.letterSpacing.md};
  transition: 200ms all;
  width: ${p => (!p.full ? "auto" : "100%")};
  color: ${p => p.theme.colors.white};
  font-size: ${p => p.theme.font.size.md};
  cursor: ${p => (p.disabled ? "default" : "pointer")};
  border-radius: ${p => p.theme.radii.md};
  ${p => p.theme.helpers.flex.center};
  padding: ${p =>
    p.size === "large"
      ? `${p.theme.space.md} ${p.theme.space.xl}`
      : `${p.theme.space.sm} ${p.theme.space.md}`};

  ${p => getVariantStyles({ ...p, ...p.theme })}
`
