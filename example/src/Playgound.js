import React from 'react'
import { withTwilight } from 'react-twilight'

const Box = withTwilight('div')
const Heading = withTwilight('h1')
const Link = withTwilight('a')
const Input = withTwilight('input')
const Form = withTwilight('form')
const Ul = withTwilight('ul')
const Ol = withTwilight('ol')
// const SubHeading = withTwilight(Component)

const Playground = () => (
  <>
    <Box
      display='flex'
      justifyContent='space-around'
      // test='> :not(:nth-child(5))'
      // selector={(props) => props.test}
      selector='> :not(:nth-child(2))'
      // selector='> :not(:nth-child(2))'
      // selector='> :nth-last-child(2)'
      // selector='> :nth-child(3)'
      // selector='> :first-child'
      // selector='> :last-child'
      select={{
        p: 8,
        m: 8,
        size: 50,
        bg: '#3003',
        color: '#fff',
        display: 'inline-flex',
        fontSize: 20,
        fontWeight: 900,
        border: '1px solid red',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <span>M</span>
      <span>N</span>
      <span>O</span>
      <span>P</span>
      <span>Q</span>
      <span>R</span>
    </Box>
    <Ul whileMarker={{ color: 'red' }}>
      <li>Coffee</li>
      <li>Tea</li>
      <li>Milk</li>
    </Ul>
    <Ol whileMarker={{ color: 'yellow' }}>
      <li>First</li>
      <li>Second</li>
      <li>Third</li>
    </Ol>
    <Box
      display='flex'
      justifyContent='space-around'
      allChildren={{
        p: 8,
        m: 8,
        size: 50,
        bg: '#3003',
        color: '#fff',
        fontSize: 20,
        fontWeight: 900,
        border: '1px solid red',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <span>A</span>
      <span>B</span>
      <span>C</span>
      <span>D</span>
      <span>E</span>
      <span>F</span>
    </Box>
    <Input whileEnable={{ bg: 'white' }} whileDisabled={{ bg: '#4444' }} />
    <Input
      disabled
      whileEnable={{ bg: 'white' }}
      whileDisabled={{ bg: '#4444' }}
    />
    <Form action=''>
      <Input
        type='radio'
        checked='checked'
        whileChecked={{ size: 50 }}
        value='male'
        name='gender'
      />{' '}
      Male
      <br />
      <Input
        type='radio'
        value='female'
        name='gender'
        whileChecked={{ size: 50 }}
      />{' '}
      Female
      <br />
      <Input
        type='checkbox'
        checked='checked'
        value='Bike'
        whileChecked={{ size: 50 }}
      />{' '}
      I have a bike
      <br />
      <Input type='checkbox' value='Car' whileChecked={{ size: 50 }} /> I have a
      car
    </Form>
    <Input whileOptional={{ border: '1px dashed blue' }} />
    <Input required whileRequired={{ border: '1px dashed orange' }} />
    <br />
    <Input
      type='email'
      whileValid={{ bg: 'green' }}
      whileInvalid={{ bg: 'red' }}
    ></Input>
    <Box>
      <p>
        <a href='#news1'>Jump to New content 1</a>
      </p>
      <p>
        <a href='#news2'>Jump to New content 2</a>
      </p>

      <p>
        Click on the links above and the :target selector highlight the current
        active HTML anchor.
      </p>
      <Box
        whileTarget={{
          p: 8,
          bg: '#fff4',
          color: 'white',
          border: '1px solid cyan',
          borderRadius: 8
        }}
      >
        <p id='news1'>
          <b>New content 1...</b>
        </p>
        <p id='news2'>
          <b>New content 2...</b>
        </p>
      </Box>
    </Box>
    <Link
      href='https://www.w3schools.comz'
      whileLink={{ color: 'purple' }}
      whileVisited={{ color: 'gray' }}
      whileActive={{ bg: 'navy' }}
      whileHover={{ border: '1px solid red' }}
      whileFocus={{ bg: 'red' }}
    >
      W3Sschools
    </Link>
    <Heading
    // css={{ color: 'blue', '--abc': 123 }}
    // m='auto'
    // p={32}
    // size={300}
    // borderY='5px solid red'
    // borderX='10px solid orange'
    // textAlign='right'
    // fontSize='3em'
    // fontWeight='700'
    // bg='#88d0ff80'
    // hover={{ fontWeight: 900, color: 'red', opacity: 4, textAlign: 'center' }}
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
    // typographyType={['bold', 'light']}
    // typographyType={{ sm: 'bold', md: 'light' }}
    // textSize='xl'
    // textSize={['xl', '2xl', '3xl']}
    // textSize={['xl', '2xl']}
    // textSize={['xl']}
    // textSize={{ _default: 'xl', sm: '2xl', md: '3xl' }}
    // textSize={{ _default: 'xl', md: '3xl' }}
    // textSize={{ sm: '2xl', md: '3xl' }}
    // textSize={{ sm: '2xl' }}
    // tt='light'
    // opacity={3}
    >
      {/* Hello world! */}
    </Heading>
  </>
)

export default Playground
