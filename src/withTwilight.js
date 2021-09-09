import styled from 'styled-components'
import core from './core'

export default (Component) =>
  typeof Component === 'string'
    ? styled[Component](core)
    : styled(Component)(core)
