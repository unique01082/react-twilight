import React from 'react'
import { ThemeProvider as ScThemeProvider } from 'styled-components'

type ThemeProviderProps = {
  theme: {
    breakpoints: string[] | number[]
  }
  buildMediaQuery?: (n: number | string) => string | undefined
  children: React.ReactNode
}

function parseValue(value: string | number): string {
  if (typeof value === 'number') {
    return `${value}px`
  }
  return value
}

function createMediaQuery(n: string | number) {
  if (!n) return
  return `@media screen and (min-width: ${parseValue(n)})`
}

const ThemeProvider = ({
  theme,
  theme: { breakpoints = [] },
  buildMediaQuery = createMediaQuery,
  ...restProps
}: ThemeProviderProps) => {
  // @ts-ignore
  breakpoints.unshift(undefined)

  return (
    <ScThemeProvider
      {...restProps}
      theme={Object.assign(theme, {
        _breakpointsMap: Object.keys(breakpoints).reduce(
          (acc, key) =>
            Object.assign(acc, {
              [key]: [breakpoints[key], buildMediaQuery(breakpoints[key])]
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
