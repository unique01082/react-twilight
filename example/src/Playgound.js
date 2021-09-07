import React from 'react'
import { Box, Box2 } from 'react-twilight'

const Playground = () => (
  <>
    {/* <Box
      as='h1'
      // bg={{ _default: 'green', s: 'yellow', m: 'cyan' }}
      color={['blue.light', 'blue', 'blue.dark']}
      // color='blue.dark'
      // c='blue.light'
      // borderTopLeft='10px solid red'
      // p={32}
      // whileHover={{ color: 'red' }}
    >
      abc
    </Box> */}
    <Box2
      as='h1'
      // bg={{ _default: 'green', s: 'yellow', m: 'cyan' }}
      color={{ _default: 'blue.light', s: 'blue', m: 'blue.dark' }}
      // color={['blue.light', 'blue', 'blue.dark']}
      // color='blue.dark'
      // c='blue.light'
      // borderTopLeft='10px solid red'
      // p={32}
      // whileHover={{ color: 'red' }}
    >
      abc
    </Box2>
    {/* <CheckBox /> */}
  </>
)

export default Playground
