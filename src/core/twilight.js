import styled from 'styled-components'
import merge from 'lodash-es/merge'
import intersection from 'lodash-es/intersection'
import difference from 'lodash-es/difference'

import { parsersManager } from '.'

const twilight = (props, theme = props.theme) => {
  const propsToProcess = difference(
    intersection(Object.keys(props), parsersManager.getSupportedProps()),
    props.ignoreProps
  )

  const result = propsToProcess.reduce(
    (acc, prop) => merge(acc, parsersManager.get(prop)(props, theme)),
    {}
  )

  return result
}

export const tl = new Proxy(
  {},
  {
    apply: Reflect.apply,
    get: (target, prop) => styled(prop)(twilight)
  }
)

export default twilight
