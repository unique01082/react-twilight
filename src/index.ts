import { ThemeConsumer } from '@baolq/styled-components'
import {
  createSelectorParser,
  createStyleParser,
  createVariantParser,
  getParsersManager,
  parsersManager,
  tl,
  twilight,
  twilightPragma
} from './core'
import * as csses from './cssParsers'
import * as selectors from './selectorParsers'
import * as styles from './styleParsers'
import ThemeProvider from './ThemeProvider'
import { Parser } from './type'
import { buildValues } from './utils'
import * as variants from './variantParsers'
import withTwilight from './withTwilight'

const addAll = (parsers: { [index: string]: Parser }) => {
  Object.keys(parsers).forEach((key) => {
    parsersManager.add(parsers[key])
  })
}

const addAllStyles = () => addAll(styles)
const addAllSelectors = () => addAll(selectors)
const addAllVariants = () => addAll(variants)
const addAllCsses = () => addAll(csses)

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
  parsersManager,
  getParsersManager,
  tl
}
