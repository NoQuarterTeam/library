import React, { ButtonHTMLAttributes } from "react"
import { capitalize } from "../utils"

import { styled, css, ThemeInterface, transparentize, lighten } from "../Theme"

export type Variant = "block" | "outline" | "text"
export type Color = any
export type Size = "small" | "large"

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
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
    <StyledContainer>
      <StyledButton
        full={props.full}
        variant={variant}
        color={color}
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

const StyledContainer = styled.div`
  padding: ${p => p.theme.paddingS};
`

const blockStyles = ({
  color = "primary",
  ...props
}: ThemeInterface & ButtonProps) => css`
  border: 2px solid
    ${p =>
      props.disabled
        ? lighten(0.08, p.theme["color" + capitalize(color)])
        : p.theme["color" + capitalize(color)]};

  background-color: ${p =>
    props.disabled
      ? lighten(0.08, p.theme["color" + capitalize(color)])
      : p.theme["color" + capitalize(color)]};

  &:hover {
    border: 2px solid
      ${p => lighten(0.08, p.theme["color" + capitalize(color)])};
    background-color: ${p =>
      lighten(0.08, p.theme["color" + capitalize(color)])};
  }
`

const outlineStyled = ({
  color = "primary",
  ...props
}: ThemeInterface & ButtonProps) => css`
  background-color: transparent;
  border: 2px solid
    ${p =>
      props.disabled
        ? lighten(0.08, p.theme["color" + capitalize(color)])
        : p.theme["color" + capitalize(color)]};

  color: ${p =>
    props.disabled
      ? lighten(0.08, p.theme["color" + capitalize(color)])
      : p.theme["color" + capitalize(color)]};
  ${props.disabled && "opacity: 0.9"};
  &:hover {
    background-color: ${p =>
      props.disabled
        ? "transparent "
        : transparentize(0.9, p.theme["color" + capitalize(color)])};
  }
`

const textStyles = ({
  color = "primary",
  ...props
}: ThemeInterface & ButtonProps) => css`
  background-color: transparent;
  border: 2px solid transparent;
  color: ${p =>
    props.disabled
      ? lighten(0.08, p.theme["color" + capitalize(color)])
      : p.theme["color" + capitalize(color)]};

  &:hover {
    ${p =>
      !props.disabled &&
      `background-color: ${transparentize(
        0.9,
        p.theme["color" + capitalize(color)],
      )}`};
  }
`

const getVariantStyles = ({
  variant = "block",
  ...props
}: ThemeInterface & ButtonProps) => {
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

const StyledButton = styled.button<ButtonProps>`
  text-align: center;
  color: white;
  letter-spacing: 1px;
  transition: 200ms all;
  width: ${p => (!p.full ? "auto" : "100%")};
  font-size: ${p => p.theme.textM};
  cursor: ${p => (p.disabled ? "default" : "pointer")};
  border-radius: ${p => p.theme.borderRadius};
  ${p => p.theme.flexCenter};
  padding: ${p =>
    p.size === "large"
      ? `${p.theme.paddingM} ${p.theme.paddingXL}`
      : `${p.theme.paddingS} ${p.theme.paddingM}`};

  ${p => getVariantStyles({ ...p, ...p.theme })}
`
