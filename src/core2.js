import merge from 'lodash-es/merge'
import intersection from 'lodash-es/intersection'
import isNil from 'lodash-es/isNil'
import isPlainObject from 'lodash-es/isPlainObject'
import pluralize from 'pluralize'
import { get } from './utils'

function defaultTransform(value, scale) {
  return get(scale, value, value)
}

function normalizeInput(config) {
  if (!config) throw new Error('Config object required')

  if (typeof config === 'string') {
    return {
      propNames: config,
      scale: pluralize(config)
    }
  }

  if (Array.isArray(config)) {
    if (config.length === 0) throw new Error('Empty array. Expected an item')
    if (!config[0] || typeof config[0] !== 'string')
      throw new Error('Invalid data type of the first item. Expected a string')

    return {
      propNames: config,
      properties: config[0],
      scale: pluralize(config[0])
    }
  }

  return config
}

function toStyledObject(value, properties) {
  return properties.reduce(
    (acc, property) => Object.assign(acc, { [property]: value }),
    {}
  )
}

function createParseFn({
  propNames,
  properties = propNames,
  scale: scaleName,
  defaultScale,
  transform = defaultTransform
}) {
  propNames = Array.isArray(propNames) ? propNames : [propNames]
  properties = Array.isArray(properties) ? properties : [properties]
  const parseFn = (rawValue, props) => {
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

    const result = {}
    propsToProcess.forEach((prop) => {
      merge(result, parseFn(props[prop], props))
    })

    return result
  }

  styledFn.cache = {}

  return styledFn
}

export function createStyledFn(input) {
  const parseFn =
    typeof input === 'function' ? input : createParseFn(normalizeInput(input))

  return createFn(parseFn)
}
