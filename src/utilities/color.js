import { system } from '../core'

export default system([
  {
    propNames: 'color',
    properties: 'color',
    scale: 'colorPalette'
  },
  {
    propNames: ['backgroundColor', 'bg'],
    properties: 'backgroundColor',
    scale: 'colorPalette'
  },
  'opacity'
])
