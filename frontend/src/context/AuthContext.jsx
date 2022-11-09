// import { useReducer, useContext, createContext } from 'react'

// import AuthReducer from '../reducers/AuthReducer'
// import UserInitialState from '../initialStates/authInitialState'

// const UserContext = createContext()

// export const AuthContextProvider = ({ children }) => {
//   const [state, dispatch] = useReducer(AuthReducer, UserInitialState)

//   const values = {
//     ...state,
//     dispatch,
//   }

//   return <UserContext.Provider value={values}>{children}</UserContext.Provider>
// }

// export const UseUserContext = () => {
//   return useContext(UserContext)
// }

import { createContext, useState, useEffect } from 'react'

const UserContext = createContext({})

export const UserDataProvider = ({ children }) => {
  return <UserContext.Provider value={{}}>{children}</UserContext.Provider>
}

export default UserContext
