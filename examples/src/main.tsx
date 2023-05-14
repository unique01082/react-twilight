import React from "react";
import ReactDOM from "react-dom";

import "antd/dist/antd.css";
import App from "./App";
import "./index.css";
import {
  addAllStyles,
  addAllSelectors,
  addAllVariants,
  addAllCsses,
  createVariantParser,
  createStyleParser,
  parsersManager,
} from "react-twilight";
// import tailwindcssTheme from './tailwindcssTheme'
// console.log('tailwindcssTheme :>> ', tailwindcssTheme)

addAllStyles();
addAllSelectors();
addAllVariants();
addAllCsses();

const fontSizeVariantParser = createVariantParser("textSize");
const objectFitStyleParser = createStyleParser("objectFit");

parsersManager.add(fontSizeVariantParser);
parsersManager.add(objectFitStyleParser);

ReactDOM.render(<App />, document.getElementById("root"));
