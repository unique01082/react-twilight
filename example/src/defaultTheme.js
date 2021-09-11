import { buildValues } from 'react-twilight'

export default {
  breakpoints: buildValues([500, 1000], { s: 0, m: 1 }),
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
  opacities: [0, 1 / 4, 2 / 4, 3 / 4, 1],
  typographyTypes: {
    bold: { bg: ['blue', 'blue.dark', 'blue.light'] },
    light: { color: 'lightpink' }
  }
}
