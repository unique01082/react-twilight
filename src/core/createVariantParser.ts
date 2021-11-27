import difference from 'lodash-es/difference'
import intersection from 'lodash-es/intersection'
import isNil from 'lodash-es/isNil'
import isPlainObject from 'lodash-es/isPlainObject'
import { ParseFunction, RawConfiguration, VariantParser } from '../type'
import normalizeInput from './normalizeInput'
import twilight from './twilight'

export default function createVariantParser(
  input: RawConfiguration
): VariantParser {
  const selectorParser: ParseFunction = (props, theme = props.theme) => {
    const { _breakpointsMap } = theme
    const propsToProcess = difference(
      // @ts-ignore because styled will be assigned value in return
      intersection(Object.keys(props), selectorParser.propNames),
      props.ignoreProps ?? []
    )

    const result = propsToProcess.reduce((acc, prop) => {
      const rawValue = props[prop]

      if (['string', 'number', 'boolean', 'symbol'].includes(typeof rawValue)) {
        return Object.assign(
          acc,
          // @ts-ignore because styled will be assigned value in return
          twilight(props.theme[selectorParser.scaleName][rawValue], props.theme)
        )
      }
      if (Array.isArray(rawValue)) {
        const values = rawValue.slice(0, _breakpointsMap.length).map((value) =>
          // @ts-ignore because styled will be assigned value in return
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
            // @ts-ignore because styled will be assigned value in return
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

  return Object.assign(selectorParser, {
    propNames,
    scaleName,
    _type: 'variant' as const
  })
}
