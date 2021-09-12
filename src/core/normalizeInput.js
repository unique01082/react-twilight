import pluralize from 'pluralize'
import isPlainObject from 'lodash-es/isPlainObject'
import { get } from '../utils'

function defaultTransform(value, scale) {
  return get(scale, value, value)
}

export default function normalizeInput(config) {
  if (!config) throw new Error('Config object required')

  if (typeof config === 'string') {
    return {
      propNames: [config],
      properties: [config],
      scaleName: pluralize(config),
      transform: defaultTransform
    }
  }

  if (Array.isArray(config)) {
    if (config.length === 0) throw new Error('Empty array. Expected an item')
    if (!config[0] || typeof config[0] !== 'string')
      throw new Error('Invalid data type of the first item. Expected a string')

    return {
      propNames: config,
      properties: [config[0]],
      scaleName: pluralize(config[0]),
      transform: defaultTransform
    }
  }

  if (isPlainObject(config)) {
    let {
      propNames,
      properties = Array.isArray(propNames) ? propNames[0] : propNames,
      scale: scaleName,
      defaultScale,
      transform = defaultTransform
    } = config

    propNames = Array.isArray(propNames) ? propNames : [propNames]
    if (typeof properties !== 'function' && !Array.isArray(properties)) {
      properties = [properties]
    }

    return { propNames, properties, scaleName, defaultScale, transform }
  }

  return config
}
