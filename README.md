# react-twilight

> Same as **styled-system**, but central manage and added a lot of abilities

[![NPM](https://img.shields.io/npm/v/react-twilight.svg)](https://www.npmjs.com/package/react-twilight) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-twilight
```

## Installation

### Wrap application by ThemeProvider

```jsx
import { ThemeProvider } from "react-twilight";
import theme from './theme'

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      {// omitted}
    </ThemeProvider>
  );
}
```

## Usage

```jsx
import {
  ThemeProvider,
  ThemeConsumer,
  createStyleParser,
  createSelectorParser,
  createVariantParser,
  withTwilight,
  buildValues,
  styles,
  csses,
  addAllStyles,
  addAllSelectors,
  addAllVariants,
  addAllCsses,
  twilightPragma,
  twilight,
  parsersManager,
  tl
} from 'react-twilight'

addAllStyles()
addAllSelectors()
addAllVariants()
addAllCsses()

const fontSizeVariantParser = createVariantParser('textSize')
const objectFitStyleParser = createStyleParser('objectFit')

parsersManager.add(fontSizeVariantParser)
parsersManager.add(objectFitStyleParser)
```

## License

MIT © [unique01082](https://github.com/unique01082)
