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

const decoratedTwilight = new Proxy(twilight, {
  apply: Reflect.apply,
  get: (target, prop) => styled(prop)(target)
})

export default decoratedTwilight
