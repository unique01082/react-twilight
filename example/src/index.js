import React from 'react'
import ReactDOM from 'react-dom'

import 'antd/dist/antd.css'
import App from './App'
import './index.css'
import {
  ThemeProvider,
  addAllStyles,
  addAllSelectors,
  addAllVariants,
  createVariantParser,
  getTwilightMap,
  createStyleParser
} from 'react-twilight'
// import defaultTheme from './defaultTheme'
import tailwindcssTheme from './tailwindcssTheme'
console.log('tailwindcssTheme :>> ', tailwindcssTheme)

addAllStyles()
addAllSelectors()
addAllVariants()

const fontSizeVariantParser = createVariantParser('textSize')
const objectFitStyleParser = createStyleParser('objectFit')

getTwilightMap().register(fontSizeVariantParser)
getTwilightMap().register(objectFitStyleParser)

ReactDOM.render(
  <ThemeProvider theme={tailwindcssTheme}>
    <App />
  </ThemeProvider>,
  document.getElementById('root')
)
