import React, { ReactNode, Fragment } from "react"
import * as SC from "styled-components"
import { ThemeInterface, defaultTheme } from "./defaultTheme"
export * from "polished"

const {
  default: styled,
  css,
  createGlobalStyle,
  keyframes,
  ThemeProvider: SCThemeProvider,
} = SC as SC.ThemedStyledComponentsModule<ThemeInterface>

interface ThemeProviderProps {
  children: ReactNode
  theme?: ThemeInterface
}

function ThemeProvider({ theme, children }: ThemeProviderProps) {
  return (
    <SCThemeProvider theme={theme || defaultTheme}>
      <Fragment>{children}</Fragment>
    </SCThemeProvider>
  )
}
export { ThemeProvider, ThemeInterface, css, createGlobalStyle, keyframes }
export default styled
