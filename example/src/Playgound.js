import React from 'react'
import { Box, CheckBox } from 'react-twilight'

const Playground = () => (
  <Box
    as='h1'
    bg={{ _default: 'green', s: 'yellow', m: 'cyan' }}
    color={['blue.light', 'blue', 'blue.dark']}
    borderTopLeft='10px solid red'
    p={32}
  >
    abc
    <CheckBox />
  </Box>
)

export default Playground
