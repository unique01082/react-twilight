import { buildValues } from './utils'

const breakpoints = ['500px', '1000px']

// aliases
breakpoints.s = breakpoints[0]
breakpoints.m = breakpoints[1]

const a = [
  '#f1f8ff',
  '#dbedff',
  '#c8e1ff',
  '#79b8ff',
  '#2188ff',
  '#0366d6',
  '#005cc5',
  '#044289',
  '#032f62',
  '#05264c'
]

a._ = a[2]

export default {
  colorPalette: {
    white: '#aaa',
    blue: buildValues(
      [
        '#f1f8ff',
        '#dbedff',
        '#c8e1ff',
        '#79b8ff',
        '#2188ff',
        '#0366d6',
        '#005cc5',
        '#044289',
        '#032f62',
        '#05264c'
      ],
      { light: 2, dark: 7 },
      '#0366d6',
      { black: '#002200' }
    )
  },
  breakpoints,
  opacity: [0, 1 / 4, 2 / 4, 3 / 4, 1]
}
