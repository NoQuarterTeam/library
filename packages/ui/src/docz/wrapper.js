import React from "react"
import { ThemeProvider, defaultTheme } from "../Theme"

const Wrapper = ({ children }) => <ThemeProvider>{children}</ThemeProvider>

export default Wrapper
