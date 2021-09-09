import { createStyleParser } from '../core'

export const color = createStyleParser({
  propNames: ['color', 'c'],
  properties: 'color',
  scale: 'colorPalette'
})

export const backgroundColor = createStyleParser({
  propNames: ['backgroundColor', 'bg'],
  scale: 'colorPalette'
})

export const opacity = createStyleParser('opacity')
