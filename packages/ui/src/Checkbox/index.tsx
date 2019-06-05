import React from "react"
import { styled, transparentize } from "../Theme"

interface CheckboxProps {
  value?: boolean
  onChange?: (e: any) => void
  id?: string
  label?: string
  style?: any
}

export function Checkbox({ label, value, ...props }: CheckboxProps) {
  return (
    <StyledContainer>
      {label && <StyledLabel htmlFor={props.id}>{label}</StyledLabel>}
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
  padding: ${p => p.theme.paddingS};
`

const StyledLabel = styled.label`
  color: ${p => p.theme.colorLabel};
  font-size: ${p => p.theme.textS};
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
  border-radius: 3px;
  border: 2px solid ${p => p.theme.colorPrimary};
  ${p => p.theme.flexCenter};

  &:hover {
    box-shadow: 0 0 5px 0 ${p => transparentize(0.5, p.theme.colorPrimary)};
  }
`
const StyledWrap = styled.label`
  position: relative;
  display: flex;
  padding: ${p => p.theme.paddingM};

  ${StyledInput} {
    &:checked ~ span {
      background-color: ${p => p.theme.colorPrimary};
      ${Icon} {
        visibility: visible;
      }
    }
  }
  ${StyledInput} {
    &:focus ~ span {
      box-shadow: 0 0 5px 0 ${p => transparentize(0.5, p.theme.colorPrimary)};
    }
  }
`
