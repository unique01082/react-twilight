import _get from 'lodash-es/get'
import _mapValues from 'lodash-es/mapValues'
import _merge from 'lodash-es/merge'

const DEFAULT_KEY = '_default'

export const get = (obj: object, path: string | any[], defaultValue: any) =>
  _get(_get(obj, path), DEFAULT_KEY, _get(obj, path, defaultValue))

export const buildValues = (
  array: Array<any> = [],
  aliases?: object,
  defaultValue?: object,
  otherValues?: object
) =>
  _merge(
    array,
    _mapValues(aliases, (index) => array[index]),
    defaultValue && { [DEFAULT_KEY]: defaultValue },
    otherValues
  )
