import './index.css'

import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { ThemeProvider, defaultTheme } from 'react-twilight'

console.log('defaultTheme :>> ', defaultTheme)

ReactDOM.render(
  <ThemeProvider theme={defaultTheme}>
    <App />
  </ThemeProvider>,
  document.getElementById('root')
)
