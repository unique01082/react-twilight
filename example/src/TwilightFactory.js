import React from 'react'
import { twilight } from 'react-twilight'

const TwilightFactory = () => (
  <twilight.div display='flex' algnItems='center' justifyContent='center'>
    <twilight.h1
      c='red'
      border='1px solid red'
      p={16}
      my={16}
      mx='auto'
      textAlign='center'
    >
      Hello world zzz
    </twilight.h1>
    <twilight.button
      c='red'
      border='1px solid red'
      bg='#f002'
      p={16}
      my={16}
      mx='auto'
      textAlign='center'
    >
      Click
    </twilight.button>
  </twilight.div>
)

export default TwilightFactory
