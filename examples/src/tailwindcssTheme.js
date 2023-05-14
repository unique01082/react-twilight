import { buildValues } from 'react-twilight'
import colors from './colors'

const space = {
  0: '0px',
  0.5: '0.125rem',
  1: '0.25rem',
  1.5: '0.375rem',
  2: '0.5rem',
  2.5: '0.625rem',
  3: '0.75rem',
  3.5: '0.875rem',
  4: '1rem',
  5: '1.25rem',
  6: '1.5rem',
  7: '1.75rem',
  8: '2rem',
  9: '2.25rem',
  10: '2.5rem',
  11: '2.75rem',
  12: '3rem',
  14: '3.5rem',
  16: '4rem',
  20: '5rem',
  24: '6rem',
  28: '7rem',
  32: '8rem',
  36: '9rem',
  40: '10rem',
  44: '11rem',
  48: '12rem',
  52: '13rem',
  56: '14rem',
  60: '15rem',
  64: '16rem',
  72: '18rem',
  80: '20rem',
  96: '24rem'
}

export default {
  breakpoints: buildValues([640, 768, 1024, 1280, 1536], {
    sm: 0,
    md: 1,
    lg: 2,
    xl: 3,
    '2xl': 4
  }),
  colorPalette: colors,
  // 0 -> 12
  space,
  sizes: {
    auto: 'auto',
    ...space,
    '1/2': '50%',
    '1/3': '33.333333%',
    '2/3': '66.666667%',
    '1/4': '25%',
    '2/4': '50%',
    '3/4': '75%',
    '1/5': '20%',
    '2/5': '40%',
    '3/5': '60%',
    '4/5': '80%',
    '1/6': '16.666667%',
    '2/6': '33.333333%',
    '3/6': '50%',
    '4/6': '66.666667%',
    '5/6': '83.333333%',
    '1/12': '8.333333%',
    '2/12': '16.666667%',
    '3/12': '25%',
    '4/12': '33.333333%',
    '5/12': '41.666667%',
    '6/12': '50%',
    '7/12': '58.333333%',
    '8/12': '66.666667%',
    '9/12': '75%',
    '10/12': '83.333333%',
    '11/12': '91.666667%',
    full: '100%',
    screen: '100vw',
    min: 'min-content',
    max: 'max-content'
  },
  textSizes: {
    xs: {
      fontSize: '0.75rem',
      lineHeight: '1rem'
    },
    sm: {
      fontSize: '0.875rem',
      lineHeight: '1.25rem'
    },
    base: {
      fontSize: '1rem',
      lineHeight: '1.5rem'
    },
    lg: {
      fontSize: '1.125rem',
      lineHeight: '1.75rem'
    },
    xl: {
      fontSize: '1.25rem',
      lineHeight: '1.75rem'
    },
    '2xl': {
      fontSize: '1.5rem',
      lineHeight: '2rem'
    },
    '3xl': {
      fontSize: '1.875rem',
      lineHeight: '2.25rem'
    },
    '4xl': {
      fontSize: '2.25rem',
      lineHeight: '2.5rem'
    },
    '5xl': {
      fontSize: '3rem',
      lineHeight: '1'
    },
    '6xl': {
      fontSize: '3.75rem',
      lineHeight: '1'
    },
    '7xl': {
      fontSize: '4.5rem',
      lineHeight: '1'
    },
    '8xl': {
      fontSize: '6rem',
      lineHeight: '1'
    },
    '9xl': {
      fontSize: '8rem',
      lineHeight: '1'
    }
  },
  fontWeights: {
    thin: 100,
    extralight: 200,
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
    black: 900
  },
  radii: {
    none: 0,
    sm: '0.125rem',
    DEFAULT: '0.25rem',
    md: '0.375rem',
    lg: '0.5rem',
    xl: '0.75rem',
    '2xl': '1rem',
    '3xl': '1.5rem',
    full: 9999
  },
  gridTemplateColumns: {
    none: 'none',
    1: 'repeat(1, minmax(0, 1fr))',
    2: 'repeat(2, minmax(0, 1fr))',
    3: 'repeat(3, minmax(0, 1fr))',
    4: 'repeat(4, minmax(0, 1fr))',
    5: 'repeat(5, minmax(0, 1fr))',
    6: 'repeat(6, minmax(0, 1fr))',
    7: 'repeat(7, minmax(0, 1fr))',
    8: 'repeat(8, minmax(0, 1fr))',
    9: 'repeat(9, minmax(0, 1fr))',
    10: 'repeat(10, minmax(0, 1fr))',
    11: 'repeat(11, minmax(0, 1fr))',
    12: 'repeat(12, minmax(0, 1fr))'
  },
  gridTemplateRows: {
    none: 'none',
    1: 'repeat(1, minmax(0, 1fr))',
    2: 'repeat(2, minmax(0, 1fr))',
    3: 'repeat(3, minmax(0, 1fr))',
    4: 'repeat(4, minmax(0, 1fr))',
    5: 'repeat(5, minmax(0, 1fr))',
    6: 'repeat(6, minmax(0, 1fr))'
  },
  gridRows: {
    'span-1': 'span 1 / span 1',
    'span-2': 'span 2 / span 2',
    'span-3': 'span 3 / span 3',
    'span-4': 'span 4 / span 4',
    'span-5': 'span 5 / span 5',
    'span-6': 'span 6 / span 6',
    'span-full': '1 / -1'
  },
  gridColumns: {
    'span-1': 'span 1 / span 1',
    'span-2': 'span 2 / span 2',
    'span-3': 'span 3 / span 3',
    'span-4': 'span 4 / span 4',
    'span-5': 'span 5 / span 5',
    'span-6': 'span 6 / span 6',
    'span-7': 'span 7 / span 7',
    'span-8': 'span 8 / span 8',
    'span-9': 'span 9 / span 9',
    'span-10': 'span 10 / span 10',
    'span-11': 'span 11 / span 11',
    'span-12': 'span 12 / span 12',
    'span-full': '1 / -1'
  },
  lineHeights: {
    none: '1',
    tight: '1.25',
    snug: '1.375',
    normal: '1.5',
    relaxed: '1.625',
    loose: '2',
    3: '.75rem',
    4: '1rem',
    5: '1.25rem',
    6: '1.5rem',
    7: '1.75rem',
    8: '2rem',
    9: '2.25rem',
    10: '2.5rem'
  },
  shadows: {
    sm: '0 1px 1px rgba(0,0,0,0.05)',
    _default: ['0 1px 2px rgba(0, 0, 0, 0.1)', '0 1px 1px rgba(0, 0, 0, 0.06)'],
    md: ['0 4px 3px rgba(0, 0, 0, 0.07)', '0 2px 2px rgba(0, 0, 0, 0.06)'],
    lg: ['0 10px 8px rgba(0, 0, 0, 0.04)', '0 4px 3px rgba(0, 0, 0, 0.1)'],
    xl: ['0 20px 13px rgba(0, 0, 0, 0.03)', '0 8px 5px rgba(0, 0, 0, 0.08)'],
    '2xl': '0 25px 25px rgba(0, 0, 0, 0.15)',
    none: '0 0 #0000'
  }
}
