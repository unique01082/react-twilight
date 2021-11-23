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
const shouldForwardProp: ShouldForwardProp = (prop, { ignoreProps = [] }) =>
  !(!ignoreProps.includes(prop) && parsersManager.isPropSupported(prop))

export default (Component: any) =>
  styled(Component).withConfig({
    shouldForwardProp
  })(core as any)
