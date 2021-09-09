import React from 'react'
import ReactDOM from 'react-dom'

import 'antd/dist/antd.css'
import App from './App'
import './index.css'
import {
  ThemeProvider,
  addAllStyles,
  addAllSelectors,
  addAllVariants
} from 'react-twilight'
import defaultTheme from './defaultTheme'

addAllStyles()
addAllSelectors()
addAllVariants()

ReactDOM.render(
  <ThemeProvider theme={defaultTheme}>
    <App />
  </ThemeProvider>,
  document.getElementById('root')
)
