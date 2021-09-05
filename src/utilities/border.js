import { system } from '../core'
import { buildValues } from '../utils'

export default system([
  'border',
  'borderStyle',
  'borderWidth',
  {
    propNames: 'borderColor',
    scale: 'colorPalette'
  },
  {
    propNames: 'borderRadius',
    scale: 'radii'
  },
  {
    propNames: 'borderTop',
    scale: 'borders'
  },
  {
    propNames: 'borderRight',
    scale: 'borders'
  },
  {
    propNames: 'borderBottom',
    scale: 'borders'
  },
  {
    propNames: 'borderLeft',
    scale: 'borders'
  },
  {
    propNames: 'borderTopLeftRadius',
    scale: 'radii'
  },
  {
    propNames: 'borderTopRightRadius',
    scale: 'radii'
  },
  {
    propNames: 'borderBottomLeftRadius',
    scale: 'radii'
  },
  {
    propNames: 'borderBottomRightRadius',
    scale: 'radii'
  },
  {
    propNames: 'borderTopLeft',
    properties: ['borderTop', 'borderLeft'],
    scale: 'borders'
  },
  {
    propNames: 'borderTopRight',
    properties: ['borderTop', 'borderRight'],
    scale: 'borders'
  },
  {
    propNames: 'borderBottomLeft',
    properties: ['borderBottom', 'borderLeft'],
    scale: 'borders'
  },
  {
    propNames: 'borderBottomRight',
    properties: ['borderBottom', 'borderRight'],
    scale: 'borders'
  },
  {
    propNames: 'borderX',
    properties: ['borderLeft', 'borderRight'],
    scale: 'borders'
  },
  {
    propNames: 'borderY',
    properties: ['borderTop', 'borderBottom'],
    scale: 'borders'
  },
  {
    propNames: 'borderTopWidth',
    scale: 'borderWidths'
  },
  {
    propNames: 'borderTopColor',
    scale: 'colorPalette'
  },
  {
    propNames: 'borderTopStyle',
    scale: 'borderStyles'
  },
  {
    propNames: 'borderRightWidth',
    scale: 'borderWidths'
  },
  {
    propNames: 'borderRightColor',
    scale: 'colorPalette'
  },
  {
    propNames: 'borderRightStyle',
    scale: 'borderStyles'
  },
  {
    propNames: 'borderBottomWidth',
    scale: 'borderWidths'
  },
  {
    propNames: 'borderBottomColor',
    scale: 'colorPalette'
  },
  {
    propNames: 'borderBottomStyle',
    scale: 'borderStyles'
  },
  {
    propNames: 'borderLeftWidth',
    scale: 'borderWidths'
  },
  {
    propNames: 'borderLeftColor',
    scale: 'colorPalette'
  },
  {
    propNames: 'borderLeftStyle',
    scale: 'borderStyles'
  }
])

buildValues({
  border: {
    propNames: 'border',
    scale: 'borders'
  },
  borderWidth: {
    propNames: 'borderWidth',
    scale: 'borderWidths'
  },
  borderStyle: {
    propNames: 'borderStyle',
    scale: 'borderStyles'
  },
  borderColor: {
    propNames: 'borderColor',
    scale: 'colors'
  },
  borderRadius: {
    propNames: 'borderRadius',
    scale: 'radii'
  },
  borderTop: {
    propNames: 'borderTop',
    scale: 'borders'
  },
  borderTopLeftRadius: {
    propNames: 'borderTopLeftRadius',
    scale: 'radii'
  },
  borderTopRightRadius: {
    propNames: 'borderTopRightRadius',
    scale: 'radii'
  },
  borderRight: {
    propNames: 'borderRight',
    scale: 'borders'
  },
  borderBottom: {
    propNames: 'borderBottom',
    scale: 'borders'
  },
  borderBottomLeftRadius: {
    propNames: 'borderBottomLeftRadius',
    scale: 'radii'
  },
  borderBottomRightRadius: {
    propNames: 'borderBottomRightRadius',
    scale: 'radii'
  },
  borderLeft: {
    propNames: 'borderLeft',
    scale: 'borders'
  },
  borderX: {
    propNames: ['borderLeft', 'borderRight'],
    scale: 'borders'
  },
  borderY: {
    propNames: ['borderTop', 'borderBottom'],
    scale: 'borders'
  },
  borderTopWidth: {
    propNames: 'borderTopWidth',
    scale: 'borderWidths'
  },
  borderTopColor: {
    propNames: 'borderTopColor',
    scale: 'colors'
  },
  borderTopStyle: {
    propNames: 'borderTopStyle',
    scale: 'borderStyles'
  },
  borderBottomWidth: {
    propNames: 'borderBottomWidth',
    scale: 'borderWidths'
  },
  borderBottomColor: {
    propNames: 'borderBottomColor',
    scale: 'colors'
  },
  borderBottomStyle: {
    propNames: 'borderBottomStyle',
    scale: 'borderStyles'
  },
  borderLeftWidth: {
    propNames: 'borderLeftWidth',
    scale: 'borderWidths'
  },
  borderLeftColor: {
    propNames: 'borderLeftColor',
    scale: 'colors'
  },
  borderLeftStyle: {
    propNames: 'borderLeftStyle',
    scale: 'borderStyles'
  },
  borderRightWidth: {
    propNames: 'borderRightWidth',
    scale: 'borderWidths'
  },
  borderRightColor: {
    propNames: 'borderRightColor',
    scale: 'colors'
  },
  borderRightStyle: {
    propNames: 'borderRightStyle',
    scale: 'borderStyles'
  }
})
