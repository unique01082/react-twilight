import merge from 'lodash-es/merge'
import intersection from 'lodash-es/intersection'
import isNil from 'lodash-es/isNil'
import isPlainObject from 'lodash-es/isPlainObject'
import normalizeInput from './normalizeInput'
import { get } from '../utils'

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
  const parseFn = (rawValue, props) => {
    console.log(rawValue, props)
    const {
      theme: { breakpoints, _breakpointsMap, _media, _mediaMap, ...theme }
    } = props
    const scale = get(theme, scaleName, defaultScale)

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
  const styledFn = (props) => {
    const propsToProcess = intersection(Object.keys(props), parseFn.propNames)

    const result = propsToProcess.reduce(
      (acc, prop) => merge(acc, parseFn(props[prop], props)),
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

  const result = createFn(styleParser)

  const a = (props) => ({ color: props.color })
  a.propNames = ['color']
  return a
}
