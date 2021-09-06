import React from 'react'
import ReactDOM from 'react-dom'

import 'antd/dist/antd.css'
import App from './App'
import './index.css'
import { ThemeProvider, defaultTheme } from 'react-twilight'

ReactDOM.render(
  <ThemeProvider theme={defaultTheme}>
    <App />
  </ThemeProvider>,
  document.getElementById('root')
)
