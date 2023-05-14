export default function toStyledObject(
  value: any,
  properties: string[]
): object {
  return properties.reduce(
    (acc, property) => Object.assign(acc, { [property]: value }),
    {}
  );
}
