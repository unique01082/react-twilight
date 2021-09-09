import merge from 'lodash-es/merge'
import intersection from 'lodash-es/intersection'
import pluralize from 'pluralize'
import { get } from '../utils'

window.pluralize = pluralize

const createMediaQuery = (n) => `@media screen and (min-width: ${n})`

// input: object ({[key]: fn(rawValue, scale, props) => object|undefined})
// outut: fn ((props) => CSS object)
export const createParser = (config) => {
  const styledFnMap = new Map()
  config.forEach((styledFn) => {
    styledFn.propNames.forEach((propName) => {
      styledFnMap.set(propName, styledFn)
    })
  })

  const parser = (props) => {
    // setup cache
    // TODO replace with ??=
    parser.cache.breakpoints ??
      (parser.cache.breakpoints = get(props.theme, 'breakpoints'))
    parser.cache.media ??
      (parser.cache.media = [
        null,
        ...parser.cache.breakpoints.map(createMediaQuery)
      ])

    const allowedProps = config.reduce(
      (acc, current) => acc.concat(current.propNames),
      []
    )

    const propsToProcess = intersection(Object.keys(props), allowedProps)

    console.log('propsToProcess :>> ', propsToProcess)

    let styles = { '&:hover': { color: 'blue' } }
    propsToProcess.forEach((prop) => {
      const styledFn = styledFnMap.get(prop)
      const rawValue = props[prop]
      const scale = get(props.theme, styledFn.scaleName, styledFn.defaultScale)

      if (typeof rawValue === 'object') {
        if (Array.isArray(rawValue)) {
          styles = merge(
            styles,
            parseResponsiveArray(
              parser.cache.media,
              styledFn,
              scale,
              rawValue,
              props
            )
          )
        } else if (rawValue !== null) {
          styles = merge(
            styles,
            parseResponsiveObject(
              parser.cache.breakpoints,
              styledFn,
              scale,
              rawValue,
              props
            )
          )
        }
      } else {
        Object.assign(styles, styledFn(rawValue, scale, props))
      }
    })

    console.log('styles :>> ', styles)
    return styles
  }

  // collect supported propNames
  parser.propNames = Array.from(styledFnMap.keys())
  parser.config = config
  parser.cache = {}

  return parser
}

const parseResponsiveArray = (
  mediaQueries,
  styledFn,
  scale,
  rawValue,
  props
) => {
  const result = {}

  rawValue.slice(0, mediaQueries.length).forEach((value, index) => {
    const style = styledFn(value, scale, props)
    const media = mediaQueries[index]
    Object.assign(
      result,
      !media
        ? style
        : {
            [media]: style
          }
    )
  })

  return result
}

const parseResponsiveObject = (
  breakpoints,
  styledFn,
  scale,
  rawValue,
  props
) => {
  const result = {}

  for (const key in rawValue) {
    const breakpoint = breakpoints[key]
    const style = styledFn(rawValue[key], scale, props)
    Object.assign(
      result,
      !breakpoint
        ? style
        : {
            [createMediaQuery(breakpoint)]: style
          }
    )
  }

  return result
}

// input: object ({properties, scale, defaultScale, transform})
// output: fn(rawValue, scale, props) => object|undefined
export const createStyleFunction = ({
  propNames,
  properties = propNames,
  scale: scaleName,
  defaultScale,
  transform = (value, scale) => get(scale, value, value)
}) => {
  propNames = Array.isArray(propNames) ? propNames : [propNames]
  properties = Array.isArray(properties) ? properties : [properties]
  const styledFn = (rawValue, scale, props) => {
    const value = transform(rawValue, scale, props)
    if (value === null) return

    return properties.reduce(
      (acc, property) => Object.assign(acc, { [property]: value }),
      {}
    )
  }

  styledFn.propNames = propNames
  styledFn.properties = properties
  styledFn.scaleName = scaleName
  styledFn.defaultScale = defaultScale

  return styledFn
}

// input: multiple configurations in object
// output: an parser
// how: normalize configurations (fn, boolean, object :>> fn(rawValue, scale, props) => object|undefined :>> parser)
export const system = (configurations = []) => {
  const normalizedConfig = configurations.map((config) => {
    switch (typeof config) {
      case 'function':
        return config
      case 'string':
        return createStyleFunction({
          propNames: config,
          scale: pluralize(config)
        })
      case 'object':
        return Array.isArray(config)
          ? createStyleFunction({
              propNames: config,
              properties: config[0],
              scale: pluralize(config[0])
            })
          : createStyleFunction(config)
    }
  })

  return createParser(normalizedConfig)
}

// input: array of parsers
// output: single parsers
// how: collect all configurations from input parsers and create new parser with those configurations
export const compose = (...parsers) => {
  const configurations = parsers.reduce(
    (acc, parser) => acc.concat(parser?.config ?? []),
    []
  )

  return createParser(configurations)
}
