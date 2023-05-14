export type PropNames = string | [string, ...string[]]
export type PropertiesFunction = (props: { [key: string]: any }) => PropNames
export type Properties = PropertiesFunction | PropNames

export type RawConfiguration =
  | PropNames
  | {
      propNames: PropNames
      properties?: Properties
      scale?: string
      transform?: (value: any, scale: object | any[]) => any
      defaultScale?: object | any[]
    }

export interface Configuration {
  propNames: string[]
  properties: string[]
  scaleName: string
  transform: (value: any, scale: object | any[]) => any
  defaultScale?: object | any[]
}

export type Breakpoint = [string | number, string]

export interface ThemeProps {
  breakpoints: string[] | number[]
  _breakpointsMap: Breakpoint[]
  [key: string | number | symbol]: any
}

export interface ParserProps {
  theme: ThemeProps
  ignoreProps?: string[]
  css?: object
}

export interface ParserDescription {
  propNames: string[]
  _type: 'style' | 'selector' | 'variant' | 'css'
}

export interface ParseFunction {
  (props: ParserProps, theme?: ThemeProps): object
}

export interface Parser extends ParseFunction, ParserDescription {}

export interface StyleParser extends Parser {
  properties: string[]
}
export interface SelectorParser extends Parser {
  properties: string[]
}
export interface VariantParser extends Parser {}
