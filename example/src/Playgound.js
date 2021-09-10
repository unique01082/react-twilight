import React from 'react'
import { withTwilight } from 'react-twilight'

const Heading = withTwilight('h1')
// const SubHeading = withTwilight(Component)

const Playground = () => (
  <>
    <Heading
      m='auto'
      p={32}
      size={300}
      borderY='5px solid red'
      borderX='10px solid orange'
      textAlign='right'
      fontSize='3em'
      fontWeight='700'
      bg='#88d0ff80'
      hover={{ fontWeight: 900, color: 'red', opacity: 4, textAlign: 'center' }}
      // color='blue.light'
      // color={['blue.light', 'blue', 'blue.dark']}
      // color={{ _default: 'blue.light', s: 'blue', m: 'blue.dark' }}
      // bg='blue.light'
      // bg={['blue.light', 'blue', 'blue.dark']}
      // whileHover={{ color: 'blue' }}
      // whileHover={{ color: ['green', 'pink', 'red'] }}
      // hover={{
      //   color: { _default: 'green', s: 'pink', m: 'red' }
      // }}
      // typographyType='bold'
      // tt='light'
      // opacity={3}
    >
      Hello world!
    </Heading>
  </>
)

export default Playground
