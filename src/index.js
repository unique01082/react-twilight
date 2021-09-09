import { ThemeConsumer } from 'styled-components'
import ThemeProvider from './ThemeProvider'
import { twilight, twilightMap } from './core'
import withTwilight from './withTwilight'
import { buildValues } from './utils'

import * as styles from './styleParsers'
import * as selectors from './selectorParsers'
import * as variants from './variantParsers'

console.log('styles :>> ', styles)

const addAll = (object) => {
  Object.keys(object).forEach((key) => {
    twilightMap.register(object[key])
  })
}

const addAllStyles = () => addAll(styles)
const addAllSelectors = () => addAll(selectors)
const addAllVariants = () => addAll(variants)

window.twilightMap = twilightMap

export {
  ThemeProvider,
  ThemeConsumer,
  withTwilight,
  buildValues,
  styles,
  addAllStyles,
  addAllSelectors,
  addAllVariants
}
