import React from "react"
import { styled, transparentize } from "../Theme"

export interface CheckboxProps {
  value?: boolean
  onChange?: (e: any) => void
  id?: string
  label?: string
  style?: any
  labelStyle?: any
  containerStyle?: any
}

export function Checkbox({ label, value, ...props }: CheckboxProps) {
  return (
    <StyledContainer style={props.containerStyle}>
      {label && (
        <StyledLabel htmlFor={props.id} style={props.labelStyle}>
          {label}
        </StyledLabel>
      )}
      <StyledWrap htmlFor={props.id}>
        <StyledInput
          id={props.id}
          type="checkbox"
          checked={value}
          onChange={props.onChange}
        />
        <StyledCheckbox>
          <Icon viewBox="0 0 24 24">
            <polyline points="20 6 9 17 4 12" />
          </Icon>
        </StyledCheckbox>
      </StyledWrap>
    </StyledContainer>
  )
}

const StyledContainer = styled.div`
  position: relative;
  width: 100%;
  padding: ${p => p.theme.space.sm};
`

const StyledLabel = styled.label`
  color: ${p => p.theme.colors.gray[400]};
  font-size: ${p => p.theme.font.size.sm};
`

const StyledInput = styled.input`
  opacity: 0;
  border: 0;
  height: 0;
  width: 0;
  margin: 0;
  position: absolute;
`

const Icon = styled.svg`
  fill: none;
  stroke: white;
  stroke-width: 4px;
  width: 12px;
  transition: 200ms all;
  visibility: hidden;
`

const StyledCheckbox = styled.span`
  height: 20px;
  width: 20px;
  cursor: pointer;
  transition: 100ms all;
  border-radius: ${p => p.theme.radii.sm};
  border: 2px solid ${p => p.theme.colors.primary};
  ${p => p.theme.helpers.flex.center};

  &:hover {
    box-shadow: 0 0 5px 0 ${p => transparentize(0.5, p.theme.colors.primary)};
  }
`
const StyledWrap = styled.label`
  position: relative;
  display: flex;
  padding: ${p => p.theme.space.md};

  ${StyledInput} {
    &:checked ~ span {
      background-color: ${p => p.theme.colors.primary};
      ${Icon} {
        visibility: visible;
      }
    }
  }
  ${StyledInput} {
    &:focus ~ span {
      box-shadow: 0 0 5px 0 ${p => transparentize(0.5, p.theme.colors.primary)};
    }
  }
`
