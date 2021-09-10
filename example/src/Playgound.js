import React from 'react'
import { withTwilight } from 'react-twilight'

const Heading = withTwilight('h1')
// const SubHeading = withTwilight(Component)

const Playground = () => (
  <>
    <Heading
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
      typographyType='bold'
      // tt='light'
      // opacity={3}
    >
      Hello world!
    </Heading>
  </>
)

export default Playground
