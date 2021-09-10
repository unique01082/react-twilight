import { createStyleParser } from '../core'

export const fontFamily = createStyleParser({
  propNames: 'fontFamily',
  scale: 'fonts'
})
export const fontSize = createStyleParser('fontSize')
export const fontWeight = createStyleParser('fontWeight')
export const lineHeight = createStyleParser('lineHeight')
export const letterSpacing = createStyleParser('letterSpacing')
export const textAlign = createStyleParser('textAlign')
export const fontStyle = createStyleParser('fontStyle')
