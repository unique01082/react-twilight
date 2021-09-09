import { compose, createStyledFn } from '../core2'

export const color = createStyledFn({
  propNames: ['color', 'c'],
  properties: 'color',
  scale: 'colorPalette'
})

// export const backgroundColor = createStyledFn({
//   propNames: ['backgroundColor', 'bg'],
//   properties: 'backgroundColor',
//   scale: 'colorPalette'
// })

// export const opacity = createStyledFn('opacity')

export const whileHover = createStyledFn({
  propNames: 'whileHover',
  properties: ':hover',
  test: true
})

export default compose(color)(whileHover)
