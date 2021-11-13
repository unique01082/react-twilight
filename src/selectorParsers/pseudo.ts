import { createSelectorParser } from '../core'

export const parentMarker = createSelectorParser({
  propNames: 'withParentMarker',
  properties: '>::marker'
})

export const marker = createSelectorParser({
  propNames: 'withMarker',
  properties: '::marker'
})

export const selection = createSelectorParser({
  propNames: 'withSelection',
  properties: '::selection'
})

export const firstLetter = createSelectorParser({
  propNames: 'withFirstLetter',
  properties: '::first-letter'
})

export const before = createSelectorParser({
  propNames: 'withBefore',
  properties: '::before'
})

export const after = createSelectorParser({
  propNames: 'withAfter',
  properties: '::after'
})
