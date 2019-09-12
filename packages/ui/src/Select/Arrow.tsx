import React from "react"
import { styled } from "../Theme"

function Arrow(props: any) {
  return (
    <StyledArrow {...props} viewBox="0 0 26 15">
      <path d="M13 10.2L3.4.6c-.8-.8-2-.8-2.8 0-.8.8-.8 2 0 2.8l11 11c.4.4.9.6 1.4.6.5 0 1-.2 1.4-.6l11-11c.8-.8.8-2 0-2.8-.8-.8-2-.8-2.8 0L13 10.2z" />
    </StyledArrow>
  )
}

export default Arrow

const StyledArrow = styled.svg`
  fill: ${p => p.theme.colors.gray[400]};
  stroke: ${p => p.theme.colors.gray[400]};
  stroke-width: 2px;
  width: 12px;
`
