import { system } from '../../core'

export default system([
  {
    propNames: ['padding', 'p'],
    scale: 'space'
  },
  {
    propNames: ['paddingTop', 'pt'],
    scale: 'space'
  },
  {
    propNames: ['paddingRight', 'pr'],
    scale: 'space'
  },
  {
    propNames: ['paddingBottom', 'pb'],
    scale: 'space'
  },
  {
    propNames: ['paddingLeft', 'pl'],
    scale: 'space'
  },
  {
    propNames: ['paddingX', 'px'],
    properties: ['paddingLeft', 'paddingRight'],
    scale: 'space'
  },
  {
    propNames: ['paddingY', 'py'],
    properties: ['paddingTop', 'paddingBottom'],
    scale: 'space'
  }
])
