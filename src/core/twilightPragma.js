import { createElement } from 'react'
import withTwilight from '../withTwilight'

export default function twilightCreateEleemnt(element, props, ...children) {
  return createElement(withTwilight(element), props, ...children)
}
