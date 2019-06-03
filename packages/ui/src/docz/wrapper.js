import React from "react"
import { ThemeProvider, defaultTheme } from "../Theme"

const Wrapper = ({ children }) => (
  <ThemeProvider
    theme={{
      ...defaultTheme,
      colorPrimary: "#3262ca",
      colorSecondary: "#1fcbaa",
    }}
  >
    {children}
  </ThemeProvider>
)

export default Wrapper
