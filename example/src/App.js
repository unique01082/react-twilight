import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

import Playgound from './Playgound'

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
        </ul>
      </nav>
      <Switch>
        <Route path='/playground'>
          <Playgound />
        </Route>
        <Route path='/'>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/playground'>Playground</Link>
            </li>
          </ul>
        </Route>
      </Switch>
    </Router>
  )
}

export default App
