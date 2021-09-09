import normalizeInput from './normalizeInput'
import twilight from './twilight'

export default function createSelectorParser(input) {
  const { propNames, properties } = normalizeInput(input)
  const selectorParser = (props) => ({
    [properties]: twilight(props.whileHover)
  })

  selectorParser.propNames = propNames

  return selectorParser
}
