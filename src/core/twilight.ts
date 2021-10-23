import difference from 'lodash-es/difference'
import intersection from 'lodash-es/intersection'
import merge from 'lodash-es/merge'
import styled from 'styled-components'
import { parsersManager } from '.'

const twilight = (
  props: { ignoreProps?: string[]; theme: object },
  theme = props.theme
): object => {
  const propsToProcess = difference(
    intersection(Object.keys(props), parsersManager.getSupportedProps()),
    props.ignoreProps ?? []
  )

  const result = propsToProcess.reduce(
    // @ts-ignore because parsersManager.get(prop) always exists
    (acc, prop) => merge(acc, parsersManager.get(prop)(props, theme)),
    {}
  )

  return result
}

export const tl = new Proxy<object>(
  {},
  {
    apply: Reflect.apply,
    get: (_target, prop) => styled[prop](twilight)
  }
)

export default twilight
