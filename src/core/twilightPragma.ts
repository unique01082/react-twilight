import React from "react";
import { withTwilight } from "./withTwilight";

export function twilightPragma(
  element: React.ComponentType<any>,
  props: object,
  ...children: React.ReactNode[]
) {
  return React.createElement(withTwilight(element), props, ...children);
}
