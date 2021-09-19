import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useLocation
} from 'react-router-dom'
import { useUpdate } from 'ahooks'
import { ThemeProvider } from 'react-twilight'
import { Button } from 'antd'

import Playgound from './Playgound'
import ParsersTable from './ParsersTable'
import PropertiesTable from './PropertiesTable'
import Sample from './Sample'
import Sample2 from './Sample2'
import TwilightPragma from './TwilightPragma'
import TwilightFactory from './TwilightFactory'
import defaultTheme from './defaultTheme'

const Menu = ({ menu }) => {
  const { pathname } = useLocation()
  const simplePathName = pathname.replace(/\//g, '')

  return (
    <ul className='menu'>
      {Object.keys(menu).map((key) => (
        <li key={key}>
          <Link
            to={`/${key}`}
            className={key === simplePathName ? 'active' : undefined}
          >
            {menu[key]}
          </Link>
        </li>
      ))}
    </ul>
  )
}

const menu = {
  '': 'Home',
  playground: 'Playground',
  parsers: 'Parsers',
  properties: 'CSS Properties',
  sample: 'Sample',
  sample2: 'Sample2',
  pragma: 'Twilight Pragma',
  factory: 'Twilight Factory'
}

function App(props) {
  const update = useUpdate()

  return (
    <ThemeProvider theme={defaultTheme}>
      <Router>
        <nav>
          <Menu menu={menu} />
          <Button
            onClick={update}
            style={{ position: 'fixed', bottom: 10, right: 10 }}
          >
            Update {Date.now()}
          </Button>
        </nav>
        <Switch>
          <Route path='/playground'>
            <Playgound />
          </Route>
          <Route path='/parsers'>
            <ParsersTable />
          </Route>
          <Route path='/properties'>
            <PropertiesTable />
          </Route>
          <Route path='/sample'>
            <Sample />
          </Route>
          <Route path='/sample2'>
            <Sample2 />
          </Route>
          <Route path='/pragma'>
            <TwilightPragma />
          </Route>
          <Route path='/factory'>
            <TwilightFactory />
          </Route>
          <Route path='/'>
            <h1>Home!</h1>
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  )
}

export default App
