import { ThemeConsumer } from 'styled-components'
import ThemeProvider from './ThemeProvider'
import {
  twilight,
  parsersManager,
  createStyleParser,
  createSelectorParser,
  createVariantParser,
  twilightPragma
} from './core'
import withTwilight from './withTwilight'
import { buildValues } from './utils'

import * as styles from './styleParsers'
import * as selectors from './selectorParsers'
import * as variants from './variantParsers'
import * as csses from './cssParsers'

const addAll = (object) => {
  Object.keys(object).forEach((key) => {
    parsersManager.add(object[key])
  })
}

const addAllStyles = () => addAll(styles)
const addAllSelectors = () => addAll(selectors)
const addAllVariants = () => addAll(variants)
const addAllCsses = () => addAll(csses)

window.parsersManager = parsersManager

window.styles = styles

export {
  ThemeProvider,
  ThemeConsumer,
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
  addAllCsses,
  twilightPragma,
  twilight,
  parsersManager
}
