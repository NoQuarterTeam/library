import React from "react"
import { ThemeProvider } from "../Theme"

const Wrapper = ({ children }) => <ThemeProvider>{children}</ThemeProvider>

export default Wrapper
