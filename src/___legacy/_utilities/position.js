import { system } from '../core'

export default system([
  'position',
  'zIndex',
  {
    propNames: 'top',
    scale: 'space'
  },
  {
    propNames: 'right',
    scale: 'space'
  },
  {
    propNames: 'bottom',
    scale: 'space'
  },
  {
    propNames: 'left',
    scale: 'space'
  }
])
