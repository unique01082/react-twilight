import { PropertiesFunction } from '../type'

export default function generatePropertiesFn(
  propName: string
): PropertiesFunction {
  return (props: object) => {
    if (!(propName in props))
      throw new Error(
        `Missing configurate property. Expected property [${propName}]`
      )

    const prop = props[propName]

    return typeof prop === 'function' ? [prop(props)] : prop
  }
}
