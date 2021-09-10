import merge from 'lodash-es/merge'
import intersection from 'lodash-es/intersection'

import { twilightMap } from '.'

const twilight = (props, theme = props.theme) => {
  const propsToProcess = intersection(
    Object.keys(props),
    Array.from(twilightMap.keys())
  )

  const result = propsToProcess.reduce(
    (acc, prop) => merge(acc, twilightMap.get(prop)(props, theme)),
    {}
  )

  return result
}

export default twilight
