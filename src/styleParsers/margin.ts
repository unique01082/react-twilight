import { createStyleParser } from '../core'

export const margin = createStyleParser({
  propNames: ['margin', 'm'],
  scale: 'space'
})
export const marginTop = createStyleParser({
  propNames: ['marginTop', 'mt'],
  scale: 'space'
})
export const marginRight = createStyleParser({
  propNames: ['marginRight', 'mr'],
  scale: 'space'
})
export const marginBottom = createStyleParser({
  propNames: ['marginBottom', 'mb'],
  scale: 'space'
})
export const marginLeft = createStyleParser({
  propNames: ['marginLeft', 'ml'],
  scale: 'space'
})
export const marginX = createStyleParser({
  propNames: ['marginX', 'mx'],
  properties: ['marginLeft', 'marginRight'],
  scale: 'space'
})
export const marginY = createStyleParser({
  propNames: ['marginY', 'my'],
  properties: ['marginTop', 'marginBottom'],
  scale: 'space'
})
