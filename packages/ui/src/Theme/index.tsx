import React, { Fragment, FC } from "react"
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
} = SC as SC.ThemedStyledComponentsModule<ThemeInterface>

interface ThemeProviderProps {
  theme?: Partial<ThemeInterface>
}

const ThemeProvider: FC<ThemeProviderProps> = ({ theme, children }) => {
  return (
    <SC.ThemeProvider
      theme={theme ? { ...defaultTheme, ...theme } : defaultTheme}
    >
      <Fragment>{children}</Fragment>
    </SC.ThemeProvider>
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
