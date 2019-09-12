import React from "react"
import { styled, transparentize } from "../Theme"

export interface SwitchProps {
  onChange: () => void
  on: boolean
}

export function Switch({ onChange, on }: SwitchProps) {
  const handleKeyDown = (e: any) => {
    if (e.key === "Space") onChange()
  }

  return (
    <StyledSwitch
      type="button"
      onKeyDown={handleKeyDown}
      aria-checked={on}
      onClick={onChange}
      on={on}
    >
      <StyledToggle on={on} />
    </StyledSwitch>
  )
}

const StyledSwitch = styled.button<{ on: boolean }>`
  position: relative;
  border: 0;
  width: 32px;
  height: 20px;
  border-radius: 20px;
  outline: 0;
  padding: 0 2px;
  transition: 200ms all;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  background-color: ${p =>
    p.on ? p.theme.colors.primary : p.theme.colors.gray[400]};

  &:hover,
  &:focus {
    box-shadow: 0 0 5px 0 ${p => transparentize(0.3, p.theme.colors.gray[400])};
  }
`

const StyledToggle = styled.div<{ on: boolean }>`
  height: 16px;
  width: 16px;
  border-radius: 50%;
  transition: 200ms all;
  background-color: white;

  transform: ${p => (p.on ? "translateX(12px)" : "translateX(0)")};
`
