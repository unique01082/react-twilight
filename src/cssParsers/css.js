import isPlainObject from 'lodash-es/isPlainObject'
import merge from 'lodash-es/merge'

import { twilightMap } from '../core'

const cssParser = ({ css, theme }) => {
  if (!css || !isPlainObject(css)) return

  return Object.keys(css).reduce(
    (acc, key) =>
      merge(
        acc,
        twilightMap.has(key)
          ? twilightMap.get(key)(css, theme)
          : { [key]: css[key] }
      ),
    {}
  )
}

cssParser.propNames = ['css']
cssParser._type = 'css'

export { cssParser }
