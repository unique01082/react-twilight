import React from 'react'
import { ThemeProvider as ScThemeProvider } from 'styled-components'

const ThemeProvider = (props) => <ScThemeProvider {...props} />

ThemeProvider.defaultProps = {
  theme: {}
}

export default ThemeProvider
