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
    console.log('rawValue :>> ', rawValue)
    console.log('props :>> ', props)
    const {
      theme: { breakpoints, _media, _mediaMap, ...theme }
    } = props
    const scale = get(theme, scaleName, defaultScale)
    console.log('scale :>> ', scale)

    if (typeof rawValue === 'string' || typeof rawValue === 'number') {
      const value = transform(rawValue, scale, props)
      return properties.reduce(
        (acc, property) => Object.assign(acc, { [property]: value }),
        {}
      )
    }
    if (Array.isArray(rawValue)) {
      const result = {}
      const values = rawValue
        .slice(0, _media.length)
        .map((r, index) => transform(r, scale, props))
      values.forEach((value, index) => {
        if (!isNil(value)) {
          const d = properties.reduce(
            (acc, property) => Object.assign(acc, { [property]: value }),
            {}
          )
          Object.assign(result, !_media[index] ? d : { [_media[index]]: d })
        }
      })
      console.log('b :>> ', result)
      return result
    }
    if (isPlainObject(rawValue)) {
      return Object.keys(rawValue).reduce((acc, key) => {
        const value = transform(rawValue[key], scale, props)
        const a = properties.reduce(
          (acc, property) => Object.assign(acc, { [property]: value }),
          {}
        )
        return Object.assign(
          acc,
          !_mediaMap[breakpoints[key]]
            ? a
            : { [_mediaMap[breakpoints[key]]]: a }
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
    const result = {}

    const propsToProcess = intersection(Object.keys(props), parseFn.propNames)

    console.log('propsToProcess :>> ', propsToProcess)

    propsToProcess.forEach((prop) => {
      const parseValue = parseFn(props[prop], props)

      console.log('parseValue :>> ', parseValue)

      merge(result, parseValue)
    })

    console.log('result :>> ', result)
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
