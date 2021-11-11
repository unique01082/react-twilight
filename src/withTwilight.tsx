import styled, { AnyStyledComponent } from 'styled-components'
import core from './core'

export default (Component: any) =>
  styled(Component as AnyStyledComponent)(core as any)
