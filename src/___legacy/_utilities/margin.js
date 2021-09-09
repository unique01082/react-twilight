import { system } from '../../core'

export default system([
  {
    propNames: ['margin', 'm'],
    scale: 'space'
  },
  {
    propNames: ['marginTop', 'mt'],
    scale: 'space'
  },
  {
    propNames: ['marginRight', 'mr'],
    scale: 'space'
  },
  {
    propNames: ['marginBottom', 'mb'],
    scale: 'space'
  },
  {
    propNames: ['marginLeft', 'ml'],
    scale: 'space'
  },
  {
    propNames: ['marginX', 'mx'],
    properties: ['marginLeft', 'marginRight'],
    scale: 'space'
  },
  {
    propNames: ['marginY', 'my'],
    properties: ['marginTop', 'marginBottom'],
    scale: 'space'
  }
])
