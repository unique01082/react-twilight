import { system } from '../core'

export default system([
  {
    propNames: 'gridGap',
    scale: 'space'
  },
  {
    propNames: 'gridColumnGap',
    scale: 'space'
  },
  {
    propNames: 'gridRowGap',
    scale: 'space'
  },
  'gridColumn',
  'gridRow',
  'gridArea',
  'gridAutoColumns',
  'gridAutoRows',
  'gridAutoFlow',
  'gridTemplateColumns',
  'gridTemplateRows',
  'gridTemplateAreas'
])
