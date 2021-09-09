import React from 'react'
import { withTwilight } from 'react-twilight'

const Heading = withTwilight('h1')
// const SubHeading = withTwilight(Component)

const Playground = () => (
  <>
    <Heading color='red' whileHover={{ color: 'blue' }} typographyType='bold'>
      Hello world!
    </Heading>
  </>
)

export default Playground
