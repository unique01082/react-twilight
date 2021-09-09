import normalizeInput from './normalizeInput'
import twilight from './twilight'

export default function createVariantParser(input) {
  const {
    propNames,
    propNames: [first],
    scaleName
  } = normalizeInput(input)
  const selectorParser = (props) =>
    twilight(props.theme[scaleName][props[first]], props.theme)

  selectorParser.propNames = propNames

  return selectorParser
}
