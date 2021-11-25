import styled from '@baolq/styled-components'
import core, { parsersManager } from './core'

interface Props {
  ignoreProps: string[]
}

interface ShouldForwardProp {
  (prop: string, props: Props): boolean
}

// true => pass to component
// false => skip
const shouldForwardProp: ShouldForwardProp = (prop, { ignoreProps = [] }) => {
  if (ignoreProps.includes(prop)) {
    return true
  }
  if (parsersManager.isPropSupported(prop) || prop === 'ignoreProps') {
    return false
  }
  return true
}

export default (Component: any) =>
  styled(Component).withConfig({
    shouldForwardProp
  })(core as any)
