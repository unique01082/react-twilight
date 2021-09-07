import React from 'react'
import { ThemeProvider as ScThemeProvider } from 'styled-components'
import get from 'lodash/get'

function createMediaQuery(n) {
  return `@media screen and (min-width: ${n})`
}

const ThemeProvider = ({ theme, theme: { breakpoints }, ...restProps }) => (
  <ScThemeProvider
    {...restProps}
    theme={Object.assign(theme, {
      _mediaMap: breakpoints.reduce(
        (acc, breakpoint) =>
          Object.assign(acc, {
            [breakpoint]: createMediaQuery(breakpoint)
          }),
        { _default: undefined }
      ),
      _media: [null].concat(breakpoints.map(createMediaQuery))
    })}
  />
)

ThemeProvider.defaultProps = {
  theme: {}
}

export default ThemeProvider
