import React from 'react'
import { parsersManager, withTwilight } from 'react-twilight'
import { Button, Collapse } from 'antd'

const { Panel } = Collapse

const Box = withTwilight('div')
const Heading = withTwilight('h1')
const Link = withTwilight('a')
const Input = withTwilight('input')
const Form = withTwilight('form')
const Ul = withTwilight('ul')
const Ol = withTwilight('ol')
const P = withTwilight('p')
// const SubHeading = withTwilight(Component)

const Playground = () => {
  return (
    <Collapse
      defaultActiveKey={['2']}
      destroyInactivePanel
      expandIconPosition='right'
    >
      <Panel header='Group' key='1'>
        <Box
          m={32}
          p={12}
          // whileGroup='abc'
          whileHover={{ bg: '#000c', border: '1px solid red' }}
          data-group='test'
          className='abc'
        >
          <P
            // fontSize={20}
            group='test'
            whileGroupHover={{ color: '#f00c' }}
          >
            New Project
          </P>
          <P
            group='test'
            // whileGroup={{ whileHover: { color: '#fff9' } }}
          >
            Create a new project from a variety of starting templates.
          </P>
        </Box>
      </Panel>
      <Panel header='Selector' key='2'>
        <Box
          display='flex'
          justifyContent='space-around'
          // test='> :not(:nth-child(5))'
          // selector={(props) => props.test}
          // selector='> :not(:nth-child(2))'
          // selector='> :nth-last-child(2)'
          // selector='> :nth-child(3)'
          // selector='> :last-child'
          // selector='> :not(:nth-child(2))'
          selector='> :first-child'
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
      </Panel>
      <Panel header='Marker' key='3'>
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
      </Panel>
      <Panel header='Enable Disabled' key='4'>
        <Input whileEnable={{ bg: 'white' }} whileDisabled={{ bg: '#4444' }} />
        <Input
          disabled
          whileEnable={{ bg: 'white' }}
          whileDisabled={{ bg: '#4444' }}
        />
      </Panel>
      <Panel header='Checked' key='5'>
        <Form action=''>
          <Input
            type='radio'
            checked='checked'
            whileChecked={{ size: 50 }}
            value='male'
            name='gender'
          />
          Male
          <br />
          <Input
            type='radio'
            value='female'
            name='gender'
            whileChecked={{ size: 50 }}
          />
          Female
          <br />
          <Input
            type='checkbox'
            checked='checked'
            value='Bike'
            whileChecked={{ size: 50 }}
          />
          I have a bike
          <br />
          <Input type='checkbox' value='Car' whileChecked={{ size: 50 }} /> I
          have a car
        </Form>
      </Panel>
      <Panel header='Optional Required' key='6'>
        <Input whileOptional={{ border: '1px dashed blue' }} />
        <Input required whileRequired={{ border: '1px dashed orange' }} />
      </Panel>
      <Panel header='All children' key='7'>
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
      </Panel>
      <Panel header='Valid Invalid' key='8'>
        <Input
          type='email'
          whileValid={{ bg: 'green' }}
          whileInvalid={{ bg: 'red' }}
        ></Input>
      </Panel>
      <Panel header='Target' key='9'>
        <Box>
          <p>
            <a href='#news1'>Jump to New content 1</a>
          </p>
          <p>
            <a href='#news2'>Jump to New content 2</a>
          </p>

          <p>
            Click on the links above and the :target selector highlight the
            current active HTML anchor.
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
      </Panel>
      <Panel header='Link' key='10'>
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
      </Panel>
      <Panel header='Basic' key='11'>
        <Button
          onClick={() => {
            parsersManager.get('c').propNames = ['zz']
            parsersManager.get('whileHover').propNames = ['whileHover', 'hover']
            parsersManager.refreshReferancesMap()
            console.log('twilightMap :>> ', parsersManager)
          }}
        >
          Rerender {Date.now()}
        </Button>
        <Heading
          margin={4}
          // data-group='abc'
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
          color={['blue.light', 'blue', 'blue.dark']}
          // color={{ _default: 'blue.light', s: 'blue', m: 'blue.dark' }}
          // bg='blue.light'
          bg={['blue', 'blue.dark', 'blue.light']}
          // whileHover={{ color: 'blue' }}
          // group='abc'
          // hover={{ zz: 'green' }}
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
          Hello world!
          {/* <Heading groupHover>def</Heading> */}
        </Heading>
      </Panel>
    </Collapse>
  )
}

export default Playground
