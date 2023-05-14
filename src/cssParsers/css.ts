import isPlainObject from 'lodash-es/isPlainObject'
import merge from 'lodash-es/merge'
import { parsersManager } from '../core'
import { Parser } from '../type'

const cssParser: Parser = ({ css, theme }) => {
  if (!css || !isPlainObject(css)) return {}

  return Object.keys(css).reduce(
    (acc, key) =>
      merge(
        acc,
        parsersManager.has(key)
          ? // @ts-ignore checked with has()
            parsersManager.get(key)(css, theme)
          : // @ts-ignore
            { [key]: css[key] }
      ),
    {}
  )
}

cssParser.propNames = ['css']
cssParser._type = 'css' as const

export { cssParser }
