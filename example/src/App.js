import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import { utilities } from 'react-twilight'
import { kebabCase } from 'lodash'
import { usePersistFn, useCreation, useMount } from 'ahooks'

import PropertiesTable from './PropertiesTable'
import PropsTable from './PropsTable'
import Playgound from './Playgound'
import { PROPERTY_STATUS_OS, keys, get, set } from './db'
import { AppContextProvider } from './context'

import properties from './properties.json'

function App() {
  const styledFns = useCreation(
    () =>
      Object.keys(utilities)
        .map((key) => utilities[key].config)
        .reduce((acc, cur) => acc.concat(cur), [])
        .sort((a, b) => (a.scaleName > b.scaleName ? 1 : -1)),
    []
  )
  const reset = usePersistFn(() =>
    Promise.all(
      properties.map((property) =>
        set(PROPERTY_STATUS_OS, property.property, property)
      )
    )
  )
  const refreshDb = usePersistFn(() =>
    keys(PROPERTY_STATUS_OS)
      .then((keys) => {
        keys.forEach((key) => {
          get(PROPERTY_STATUS_OS, key).then((p) => {
            if (p) {
              p.coverage = false
              set(PROPERTY_STATUS_OS, key, p)
            }
          })
        })
      })
      .then(() => {
        styledFns.forEach(({ propNames, properties }) => {
          properties.map(kebabCase).forEach((property) => {
            get(PROPERTY_STATUS_OS, property).then((p) => {
              if (p) {
                p.coverage = true
                p.coverageBy = propNames
                set(PROPERTY_STATUS_OS, property, p)
              }
            })
          })
        })
      })
  )

  useMount(() => {
    reset().then(refreshDb)
  })

  return (
    <AppContextProvider styledFns={styledFns} refreshDb={refreshDb}>
      <Router>
        <nav>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/props'>React Props</Link>
            </li>
            <li>
              <Link to='/properties'>CSS Properties</Link>
            </li>
            <li>
              <Link to='/playground'>Playground</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path='/properties'>
            <PropertiesTable />
          </Route>
          <Route path='/props'>
            <PropsTable />
          </Route>
          <Route path='/playground'>
            <Playgound />
          </Route>
          <Route path='/'>
            <ul>
              <li>
                <Link to='/'>Home</Link>
              </li>
              <li>
                <Link to='/props'>React Props</Link>
              </li>
              <li>
                <Link to='/properties'>CSS Properties</Link>
              </li>
              <li>
                <Link to='/playground'>Playground</Link>
              </li>
            </ul>
          </Route>
        </Switch>
      </Router>
    </AppContextProvider>
  )
}

export default App
