import React from 'react'
import { ThemeProvider as ScThemeProvider } from 'styled-components'
import get from 'lodash/get'

function createMediaQuery(n) {
  if (!n) return
  return `@media screen and (min-width: ${n})`
}

const ThemeProvider = ({ theme, theme: { breakpoints }, ...restProps }) => {
  breakpoints.unshift(undefined)

  return (
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
        _media: breakpoints.map(createMediaQuery),
        _breakpointsMap: Object.keys(breakpoints).reduce(
          (acc, key) =>
            Object.assign(acc, {
              [key]: [breakpoints[key], createMediaQuery(breakpoints[key])]
            }),
          breakpoints
        )
      })}
    />
  )
}

ThemeProvider.defaultProps = {
  theme: {}
}

export default ThemeProvider
