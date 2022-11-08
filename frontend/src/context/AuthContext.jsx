import { useReducer, useContext, createContext } from "react";

import AuthReducer from "../reducers/AuthReducer";
import UserInitialState from "../initialStates/UserInitialStates";

const UserContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, UserInitialState);

  const values = {
    ...state,
    dispatch,
  };

  return <UserContext.Provider value={values}>{children}</UserContext.Provider>;
};

export const UseUserContext = () => {
  return useContext(UserContext);
};
