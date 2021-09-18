import intersection from 'lodash-es/intersection'
import difference from 'lodash-es/difference'

import twilight from './twilight'
import normalizeInput from './normalizeInput'
import toStyledObject from './toStyledObject'

export default function createSelectorParser(input) {
  const { propNames, properties } = normalizeInput(input)

  const selectorParser = (props) => {
    console.log(Object.keys(props), selectorParser.propNames)
    const propsToProcess = difference(
      intersection(Object.keys(props), selectorParser.propNames),
      props.ignoreProps
    )

    console.log('propsToProcess :>> ', propsToProcess)

    const result = propsToProcess.reduce(
      (acc, prop) => Object.assign(acc, twilight(props[prop], props.theme)),
      {}
    )

    console.log('result :>> ', result)

    let caculatedProperties
    if (typeof selectorParser.properties === 'function') {
      caculatedProperties = [selectorParser.properties(props)]
    }

    return toStyledObject(
      result,
      caculatedProperties ?? selectorParser.properties
    )
  }

  selectorParser.propNames = propNames
  selectorParser.properties = properties
  selectorParser._type = 'selector'

  return selectorParser
}
