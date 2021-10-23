import { createStyleParser } from '../core'

export const border = createStyleParser('border')
export const borderStyle = createStyleParser('borderStyle')
export const borderWidth = createStyleParser('borderWidth')
export const borderColor = createStyleParser({
  propNames: 'borderColor',
  scale: 'colorPalette'
})
export const borderRadius = createStyleParser({
  propNames: 'borderRadius',
  scale: 'radii'
})
export const borderTop = createStyleParser({
  propNames: 'borderTop',
  scale: 'borders'
})
export const borderRight = createStyleParser({
  propNames: 'borderRight',
  scale: 'borders'
})
export const borderBottom = createStyleParser({
  propNames: 'borderBottom',
  scale: 'borders'
})
export const borderLeft = createStyleParser({
  propNames: 'borderLeft',
  scale: 'borders'
})
export const borderTopLeftRadius = createStyleParser({
  propNames: 'borderTopLeftRadius',
  scale: 'radii'
})
export const borderTopRightRadius = createStyleParser({
  propNames: 'borderTopRightRadius',
  scale: 'radii'
})
export const borderBottomLeftRadius = createStyleParser({
  propNames: 'borderBottomLeftRadius',
  scale: 'radii'
})
export const borderBottomRightRadius = createStyleParser({
  propNames: 'borderBottomRightRadius',
  scale: 'radii'
})
export const borderTopLeft = createStyleParser({
  propNames: 'borderTopLeft',
  properties: ['borderTop', 'borderLeft'],
  scale: 'borders'
})
export const borderTopRight = createStyleParser({
  propNames: 'borderTopRight',
  properties: ['borderTop', 'borderRight'],
  scale: 'borders'
})
export const borderBottomLeft = createStyleParser({
  propNames: 'borderBottomLeft',
  properties: ['borderBottom', 'borderLeft'],
  scale: 'borders'
})
export const borderBottomRight = createStyleParser({
  propNames: 'borderBottomRight',
  properties: ['borderBottom', 'borderRight'],
  scale: 'borders'
})
export const borderX = createStyleParser({
  propNames: 'borderX',
  properties: ['borderLeft', 'borderRight'],
  scale: 'borders'
})
export const borderY = createStyleParser({
  propNames: 'borderY',
  properties: ['borderTop', 'borderBottom'],
  scale: 'borders'
})
export const borderTopWidth = createStyleParser({
  propNames: 'borderTopWidth',
  scale: 'borderWidths'
})
export const borderTopColor = createStyleParser({
  propNames: 'borderTopColor',
  scale: 'colorPalette'
})
export const borderTopStyle = createStyleParser({
  propNames: 'borderTopStyle',
  scale: 'borderStyles'
})
export const borderRightWidth = createStyleParser({
  propNames: 'borderRightWidth',
  scale: 'borderWidths'
})
export const borderRightColor = createStyleParser({
  propNames: 'borderRightColor',
  scale: 'colorPalette'
})
export const borderRightStyle = createStyleParser({
  propNames: 'borderRightStyle',
  scale: 'borderStyles'
})
export const borderBottomWidth = createStyleParser({
  propNames: 'borderBottomWidth',
  scale: 'borderWidths'
})
export const borderBottomColor = createStyleParser({
  propNames: 'borderBottomColor',
  scale: 'colorPalette'
})
export const borderBottomStyle = createStyleParser({
  propNames: 'borderBottomStyle',
  scale: 'borderStyles'
})
export const borderLeftWidth = createStyleParser({
  propNames: 'borderLeftWidth',
  scale: 'borderWidths'
})
export const borderLeftColor = createStyleParser({
  propNames: 'borderLeftColor',
  scale: 'colorPalette'
})
export const borderLeftStyle = createStyleParser({
  propNames: 'borderLeftStyle',
  scale: 'borderStyles'
})
