import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useLocation
} from 'react-router-dom'

import Playgound from './Playgound'
import ParsersTable from './ParsersTable'
import PropertiesTable from './PropertiesTable'
import Sample from './Sample'
import Sample2 from './Sample2'

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
  sample2: 'Sample2'
}

function App(props) {
  return (
    <Router>
      <nav>
        <Menu menu={menu} />
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
        <Route path='/'>
          <h1>Welcome!</h1>
        </Route>
      </Switch>
    </Router>
  )
}

export default App
