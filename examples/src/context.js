import React, { useContext } from 'react'

const AppContext = React.createContext()

function AppContextProvider({ children, name, ...values }) {
  return <AppContext.Provider value={values}>{children}</AppContext.Provider>
}

const AppContextConsumer = AppContext.Consumer

const useAppContext = () => useContext(AppContext)

export default AppContext
export { AppContextProvider, AppContextConsumer, useAppContext }
