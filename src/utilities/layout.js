import isNumber from 'lodash-es/isNumber'
import { system } from '../core'
import { get } from '../utils'

const getWidth = (n, scale) =>
  get(scale, n, !isNumber(n) || n > 1 ? n : n * 100 + '%')

export default system([
  {
    propNames: ['width', 'w'],
    scale: 'sizes',
    transform: getWidth
  },
  {
    propNames: ['height', 'h'],
    scale: 'sizes'
  },
  {
    propNames: 'minWidth',
    scale: 'sizes'
  },
  {
    propNames: 'minHeight',
    scale: 'sizes'
  },
  {
    propNames: 'maxWidth',
    scale: 'sizes'
  },
  {
    propNames: 'maxHeight',
    scale: 'sizes'
  },
  {
    propNames: ['width', 'height'],
    scale: 'sizes'
  },
  'overflow',
  'overflowX',
  'overflowY',
  'display',
  'verticalAlign'
])
