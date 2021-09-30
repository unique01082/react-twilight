import intersection from 'lodash-es/intersection'
import difference from 'lodash-es/difference'

import twilight from './twilight'
import normalizeInput from './normalizeInput'
import toStyledObject from './toStyledObject'

export default function createSelectorParser(input) {
  const selectorParser = (props, theme = props.theme) => {
    const propsToProcess = difference(
      intersection(Object.keys(props), selectorParser.propNames),
      props.ignoreProps
    )

    const result = propsToProcess.reduce((acc, prop) => {
      const r = Object.assign(acc, twilight(props[prop], theme))
      return r
    }, {})

    let caculatedProperties
    if (typeof selectorParser.properties === 'function') {
      caculatedProperties = [selectorParser.properties(props)]
    }

    return toStyledObject(
      result,
      caculatedProperties ?? selectorParser.properties
    )
  }

  const { propNames, properties } = normalizeInput(input)
  Object.assign(selectorParser, { propNames, properties, _type: 'selector' })

  return selectorParser
}
