import intersection from 'lodash-es/intersection'

import twilight from './twilight'
import normalizeInput from './normalizeInput'
import toStyledObject from './toStyledObject'

export default function createSelectorParser(input) {
  const { propNames, properties } = normalizeInput(input)

  const selectorParser = (props) => {
    const propsToProcess = intersection(Object.keys(props), propNames)
    console.log('propsToProcess :>> ', propsToProcess)

    const result = propsToProcess.reduce(
      (acc, prop) => Object.assign(acc, twilight(props[prop], props.theme)),
      {}
    )

    return toStyledObject(result, properties)
  }

  selectorParser.propNames = propNames

  return selectorParser
}
