import React, { Fragment } from "react"
import { ThemeProvider } from "../Theme"
import { GlobalStyles } from "../GlobalStyles"

const Wrapper = ({ children }) => (
  <Fragment>
    <GlobalStyles />
    <ThemeProvider>{children}</ThemeProvider>
  </Fragment>
)

export default Wrapper
