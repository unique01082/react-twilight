import { PropertiesFunction } from '../type'

export function generatePropertiesFn(propName: string): PropertiesFunction {
  return (props: object) => {
    if (!(propName in props))
      throw new Error(
        `Missing configure property. Expected property [${propName}]`
      )

    // @ts-ignore
    const prop = props[propName]

    return typeof prop === 'function' ? [prop(props)] : prop
  }
}
