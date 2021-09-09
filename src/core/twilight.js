import merge from 'lodash-es/merge'
import intersection from 'lodash-es/intersection'

import { twilightMap } from '.'

const twilight = (props, theme = props.theme) => {
  const propsToProcess = intersection(
    Object.keys(props),
    Array.from(twilightMap.keys())
  )
  console.log('propsToProcess :>> ', propsToProcess)

  const result = propsToProcess.reduce(
    (acc, prop) => merge(acc, twilightMap.get(prop)(props, theme)),
    {}
  )

  console.log('result :>> ', result)

  return result
}

export default twilight
