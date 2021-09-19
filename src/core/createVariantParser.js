import intersection from 'lodash-es/intersection'
import difference from 'lodash-es/difference'
import isNil from 'lodash-es/isNil'
import isPlainObject from 'lodash-es/isPlainObject'

import normalizeInput from './normalizeInput'
import twilight from './twilight'

export default function createVariantParser(input) {
  const selectorParser = (props, theme = props.theme) => {
    const { _breakpointsMap } = theme
    const propsToProcess = difference(
      intersection(Object.keys(props), selectorParser.propNames),
      props.ignoreProps
    )

    const result = propsToProcess.reduce((acc, prop) => {
      const rawValue = props[prop]

      if (typeof rawValue === 'string' || typeof rawValue === 'number') {
        return Object.assign(
          acc,
          twilight(props.theme[selectorParser.scaleName][rawValue], props.theme)
        )
      }
      if (Array.isArray(rawValue)) {
        const values = rawValue
          .slice(0, _breakpointsMap.length)
          .map((value) =>
            twilight(props.theme[selectorParser.scaleName][value], props.theme)
          )

        return values.reduce((acc, value, index) => {
          if (isNil(value)) return acc
          const media = _breakpointsMap[index][1]

          return Object.assign(acc, !media ? value : { [media]: value })
        }, {})
      }
      if (isPlainObject(rawValue)) {
        return Object.keys(rawValue).reduce((acc, key) => {
          const value = twilight(
            props.theme[selectorParser.scaleName][rawValue[key]],
            props.theme
          )
          if (isNil(value)) return acc
          const media = _breakpointsMap[key]?.[1]

          return Object.assign(acc, !media ? value : { [media]: value })
        }, {})
      }

      return acc
    }, {})

    return result
  }

  const { propNames, scaleName } = normalizeInput(input)
  Object.assign(selectorParser, { propNames, scaleName, _type: 'variant' })

  return selectorParser
}
