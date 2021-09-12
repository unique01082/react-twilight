import { createSelectorParser, generatePropertiesFn } from '../core'

export const allChildren = createSelectorParser({
  propNames: 'allChildren',
  properties: '> *'
})

export const select = createSelectorParser({
  propNames: 'select',
  properties: generatePropertiesFn('selector')
})
