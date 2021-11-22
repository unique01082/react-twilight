import styled from '@baolq/styled-components'
import core, { parsersManager } from './core'

interface Props {
  ignoreProps: string[]
}

interface ShouldForwardProp {
  (
    prop: string,
    props: Props,
    defaultValidatorFn: (prop: string) => boolean
  ): boolean
}

// true => pass to component
// false => skip
const shouldForwardProp: ShouldForwardProp = (
  prop,
  { ignoreProps = [] },
  defaultValidatorFn
) => {
  if (ignoreProps.includes(prop)) {
    return true
  }
  if (parsersManager.isPropSupported(prop)) {
    return false
  }
  return defaultValidatorFn(prop)
}

export default (Component: any) =>
  styled(Component).withConfig({
    shouldForwardProp
  })(core as any)
