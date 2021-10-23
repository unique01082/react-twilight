import styled from 'styled-components'
import core from './core'

// @ts-ignore
export default (Component: JSX.Element | string) => styled(Component)(core)
