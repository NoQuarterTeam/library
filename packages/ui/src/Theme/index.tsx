import React, { ReactNode, Fragment } from "react"
import * as SC from "styled-components"
import { ThemeInterface, defaultTheme } from "./defaultTheme"
export * from "polished"

const {
  default: styled,
  css,
  ServerStyleSheet,
  StyleSheetManager,
  withTheme,
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
export {
  createGlobalStyle,
  css,
  defaultTheme,
  keyframes,
  ServerStyleSheet,
  StyleSheetManager,
  styled,
  ThemeInterface,
  ThemeProvider,
  withTheme,
}
