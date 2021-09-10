import isNumber from 'lodash-es/isNumber'
import { createStyleParser } from '../core'
import { get } from '../utils'

const getWidth = (n, scale) =>
  get(scale, n, !isNumber(n) || n > 1 ? n : n * 100 + '%')

export const width = createStyleParser({
  propNames: ['width', 'w'],
  scale: 'sizes',
  transform: getWidth
})
export const height = createStyleParser({
  propNames: ['height', 'h'],
  scale: 'sizes'
})
export const minWidth = createStyleParser({
  propNames: 'minWidth',
  scale: 'sizes'
})
export const minHeight = createStyleParser({
  propNames: 'minHeight',
  scale: 'sizes'
})
export const maxWidth = createStyleParser({
  propNames: 'maxWidth',
  scale: 'sizes'
})
export const maxHeight = createStyleParser({
  propNames: 'maxHeight',
  scale: 'sizes'
})
export const size = createStyleParser({
  propNames: 'size',
  properties: ['width', 'height'],
  scale: 'sizes'
})
export const overflow = createStyleParser('overflow')
export const overflowX = createStyleParser('overflowX')
export const overflowY = createStyleParser('overflowY')
export const display = createStyleParser('display')
export const verticalAlign = createStyleParser('verticalAlign')
