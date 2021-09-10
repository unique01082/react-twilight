export default function toStyledObject(value, properties) {
  return properties.reduce(
    (acc, property) => Object.assign(acc, { [property]: value }),
    {}
  )
}
