import intersection from 'lodash-es/intersection'

import normalizeInput from './normalizeInput'
import twilight from './twilight'

export default function createVariantParser(input) {
  const { propNames, scaleName } = normalizeInput(input)

  const selectorParser = (props) => {
    const propsToProcess = intersection(Object.keys(props), propNames)

    const result = propsToProcess.reduce(
      (acc, prop) =>
        Object.assign(
          acc,
          twilight(props.theme[scaleName][props[prop]], props.theme)
        ),
      {}
    )

    return result
  }

  selectorParser.propNames = propNames

  return selectorParser
}
