import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

import Playgound from './Playgound'
import ParsersTable from './ParsersTable'
import PropertiesTable from './PropertiesTable'

function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/playground'>Playground</Link>
          </li>
          <li>
            <Link to='/parsers'>Parsers</Link>
          </li>
          <li>
            <Link to='/properties'>CSS Properties</Link>
          </li>
        </ul>
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
        <Route path='/'>
          <h1>Welcome!</h1>
        </Route>
      </Switch>
    </Router>
  )
}

export default App
