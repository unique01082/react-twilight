import { openDB } from 'idb'

const DB_NAME = 'react-twilight'
const DB_VERSION = 1

const KEYVAL_OS = 'keyval'
const PROPERTY_STATUS_OS = 'property-status'
const PROPS_OS = 'props'

const db = openDB(DB_NAME, DB_VERSION, {
  upgrade(d) {
    d.createObjectStore(KEYVAL_OS)
    d.createObjectStore(PROPERTY_STATUS_OS)
  }
})

export const get = async (os, key) => {
  return (await db).get(os, key)
}

export const set = async (os, key, val) => {
  return (await db).put(os, val, key)
}

export const remove = async (os, key) => {
  return (await db).delete(os, key)
}

export const clear = async (os) => {
  return (await db).clear(os)
}

export const keys = async (os) => {
  return (await db).getAllKeys(os)
}

export const values = async (os) => {
  return (await db).getAll(os)
}

export default db
export { DB_NAME, DB_VERSION, KEYVAL_OS, PROPERTY_STATUS_OS, PROPS_OS }
