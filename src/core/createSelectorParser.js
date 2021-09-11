import intersection from 'lodash-es/intersection'
import difference from 'lodash-es/difference'

import twilight from './twilight'
import normalizeInput from './normalizeInput'
import toStyledObject from './toStyledObject'

export default function createSelectorParser(input) {
  const { propNames, properties } = normalizeInput(input)

  const selectorParser = (props) => {
    const propsToProcess = difference(
      intersection(Object.keys(props), propNames),
      props.ignoreProps
    )

    const result = propsToProcess.reduce(
      (acc, prop) => Object.assign(acc, twilight(props[prop], props.theme)),
      {}
    )

    return toStyledObject(result, properties)
  }

  selectorParser.propNames = propNames
  selectorParser.properties = properties
  selectorParser._type = 'selector'

  return selectorParser
}
