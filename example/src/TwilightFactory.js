import React from 'react'
import { tl } from 'react-twilight'

const TwilightFactory = () => (
  <tl.div display='flex' algnItems='center' justifyContent='center'>
    <tl.h1
      c='red'
      border='1px solid red'
      p={16}
      my={16}
      mx='auto'
      textAlign='center'
    >
      Hello world zzz
    </tl.h1>
    <tl.button
      c='red'
      border='1px solid red'
      bg='#f002'
      p={16}
      my={16}
      mx='auto'
      textAlign='center'
    >
      Click
    </tl.button>
  </tl.div>
)

export default TwilightFactory
