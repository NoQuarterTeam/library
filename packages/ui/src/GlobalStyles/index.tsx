import React from "react"
import { FlattenSimpleInterpolation } from "styled-components"
import { useOutlineControl } from "../../../hooks"
import { createGlobalStyle } from "../Theme"
import body from "./styles/body"
import overides from "./styles/overides"

interface Props {
  styles?: FlattenSimpleInterpolation
}

export function GlobalStyles(props: Props) {
  useOutlineControl()

  const Global = createGlobalStyle`
		${body}
		${overides}
		${props.styles ? props.styles : ""}
	`
  return <Global />
}
