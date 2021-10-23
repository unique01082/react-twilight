import isPlainObject from 'lodash-es/isPlainObject'
import pluralize from 'pluralize'
import type { Configuration, RawConfiguration } from '../type'
import { get } from '../utils'

function defaultTransform(value: any, scale: object | any[]): any {
  return get(scale, value, value)
}

export default function normalizeInput(
  config: RawConfiguration
): Configuration {
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
    const [firstItem] = config
    if (config.length === 0) throw new Error('Empty array. Expected an item')
    if (!firstItem || typeof firstItem !== 'string')
      throw new Error(
        `Invalid data type of the first item. Expected a string but received ${firstItem}`
      )

    return {
      propNames: config,
      properties: [firstItem],
      scaleName: pluralize(firstItem),
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

    // @ts-ignore
    return { propNames, properties, scaleName, defaultScale, transform }
  }

  throw new Error('Invalid configuration')
}
