import _get from 'lodash-es/get'
import _merge from 'lodash-es/merge'
import _mapValues from 'lodash-es/mapValues'

const DEFAULT_KEY = '_default'

export const get = (obj, path, defaultValue) =>
  _get(_get(obj, path), DEFAULT_KEY, _get(obj, path, defaultValue))

export const buildValues = (array = [], aliases, defaultValue, otherValues) =>
  _merge(
    array,
    _mapValues(aliases, (index) => array[index]),
    defaultValue && { [DEFAULT_KEY]: defaultValue },
    otherValues
  )
