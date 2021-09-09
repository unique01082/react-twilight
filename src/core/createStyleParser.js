import merge from 'lodash-es/merge'
import intersection from 'lodash-es/intersection'
import isNil from 'lodash-es/isNil'
import isPlainObject from 'lodash-es/isPlainObject'

import { get } from '../utils'
import normalizeInput from './normalizeInput'

function toStyledObject(value, properties) {
  return properties.reduce(
    (acc, property) => Object.assign(acc, { [property]: value }),
    {}
  )
}

function createParseFn({
  propNames,
  properties,
  scaleName,
  defaultScale,
  transform
}) {
  const parseFn = (rawValue, props, theme) => {
    const { _breakpointsMap, ...restTheme } = theme
    const scale = get(restTheme, scaleName, defaultScale)

    if (typeof rawValue === 'string' || typeof rawValue === 'number') {
      const value = transform(rawValue, scale, props)
      return toStyledObject(value, properties)
    }
    if (Array.isArray(rawValue)) {
      const values = rawValue
        .slice(0, _breakpointsMap.length)
        .map((r) => transform(r, scale, props))

      return values.reduce((acc, value, index) => {
        if (isNil(value)) return acc
        const styledObject = toStyledObject(value, properties)
        const media = _breakpointsMap[index][1]

        return Object.assign(
          acc,
          !media ? styledObject : { [media]: styledObject }
        )
      }, {})
    }
    if (isPlainObject(rawValue)) {
      return Object.keys(rawValue).reduce((acc, key) => {
        const value = transform(rawValue[key], scale, props)
        if (isNil(value)) return acc
        const styledObject = toStyledObject(value, properties)
        const media = _breakpointsMap[key]?.[1]

        return Object.assign(
          acc,
          !media ? styledObject : { [media]: styledObject }
        )
      }, {})
    }
  }

  Object.assign(parseFn, {
    propNames,
    properties,
    scaleName,
    defaultScale,
    transform
  })

  return parseFn
}

function createFn(parseFn) {
  const styledFn = (props, theme = props.theme) => {
    const propsToProcess = intersection(Object.keys(props), parseFn.propNames)

    const result = propsToProcess.reduce(
      (acc, prop) => merge(acc, parseFn(props[prop], props, theme)),
      {}
    )

    return result
  }

  Object.assign(styledFn, parseFn, { parseFn })

  return styledFn
}

export default function createStyleParser(input) {
  const styleParser =
    typeof input === 'function' ? input : createParseFn(normalizeInput(input))

  return createFn(styleParser)
}
