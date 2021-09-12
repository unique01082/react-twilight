import { ThemeConsumer } from 'styled-components'
import ThemeProvider from './ThemeProvider'
import {
  twilightMap,
  createStyleParser,
  createSelectorParser,
  createVariantParser
} from './core'
import withTwilight from './withTwilight'
import { buildValues } from './utils'

import * as styles from './styleParsers'
import * as selectors from './selectorParsers'
import * as variants from './variantParsers'
import * as csses from './cssParsers'

const addAll = (object) => {
  Object.keys(object).forEach((key) => {
    twilightMap.register(object[key])
  })
}

const addAllStyles = () => addAll(styles)
const addAllSelectors = () => addAll(selectors)
const addAllVariants = () => addAll(variants)
const addAllCsses = () => addAll(csses)

const getTwilightMap = () => twilightMap

window.twilightMap = twilightMap

export {
  ThemeProvider,
  ThemeConsumer,
  getTwilightMap,
  createStyleParser,
  createSelectorParser,
  createVariantParser,
  withTwilight,
  buildValues,
  styles,
  csses,
  addAllStyles,
  addAllSelectors,
  addAllVariants,
  addAllCsses
}
