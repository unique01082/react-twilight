import merge from 'lodash-es/merge'
import intersection from 'lodash-es/intersection'
import difference from 'lodash-es/difference'
import isNil from 'lodash-es/isNil'
import isPlainObject from 'lodash-es/isPlainObject'

import { get } from '../utils'
import normalizeInput from './normalizeInput'
import toStyledObject from './toStyledObject'

export default function createStyleParser(input) {
  const parseFn = (rawValue, props, theme) => {
    const { _breakpointsMap, ...restTheme } = theme
    const scale = get(restTheme, styledFn.scaleName, styledFn.defaultScale)

    if (typeof rawValue === 'string' || typeof rawValue === 'number') {
      const value = styledFn.transform(rawValue, scale, props)
      return toStyledObject(value, styledFn.properties)
    }
    if (Array.isArray(rawValue)) {
      const values = rawValue
        .slice(0, _breakpointsMap.length)
        .map((r) => styledFn.transform(r, scale, props))

      return values.reduce((acc, value, index) => {
        if (isNil(value)) return acc
        const styledObject = toStyledObject(value, styledFn.properties)
        const media = _breakpointsMap[index][1]

        return Object.assign(
          acc,
          !media ? styledObject : { [media]: styledObject }
        )
      }, {})
    }
    if (isPlainObject(rawValue)) {
      return Object.keys(rawValue).reduce((acc, key) => {
        const value = styledFn.transform(rawValue[key], scale, props)
        if (isNil(value)) return acc
        const styledObject = toStyledObject(value, styledFn.properties)
        const media = _breakpointsMap[key]?.[1]

        return Object.assign(
          acc,
          !media ? styledObject : { [media]: styledObject }
        )
      }, {})
    }
    throw new Error('Unsupported value')
  }

  const styledFn = (props, theme = props.theme) => {
    const propsToProcess = difference(
      intersection(Object.keys(props), styledFn.propNames),
      props.ignoreProps
    )

    const result = propsToProcess.reduce(
      (acc, prop) => merge(acc, parseFn(props[prop], props, theme)),
      {}
    )

    return result
  }

  Object.assign(styledFn, normalizeInput(input), { _type: 'style' })

  return styledFn
}
