import React, { createElement } from 'react'
import withTwilight from '../withTwilight'

export default function twilightCreateEleemnt(
  element: JSX.Element,
  props: object,
  ...children: React.ReactNode[]
) {
  return createElement(withTwilight(element), props, ...children)
}
