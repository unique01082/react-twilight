import { createSelectorParser } from '../core'

export default createSelectorParser({
  propNames: ['whileHover', 'hover'],
  properties: '&:hover'
})
