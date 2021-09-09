import styled from 'styled-components'

import {
  background,
  border,
  color,
  flexbox,
  grid,
  layout,
  position,
  shadow,
  space,
  typography
} from './utilities'
import { hover } from './selectors'

const Box = styled.div(
  background,
  border,
  color,
  flexbox,
  grid,
  layout,
  position,
  shadow,
  space,
  typography,
  hover
)

export default Box
