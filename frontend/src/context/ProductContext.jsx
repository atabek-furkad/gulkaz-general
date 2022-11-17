import { createContext, useReducer } from "react";
import { initialState } from "../initialStates/InitialProductState";
import ProductReducer from "../reducers/ProductReducer";

export const ProductsContext = createContext();

export const ProductsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(ProductReducer, initialState);

  const values = { state, dispatch };
  return (
    <ProductsContext.Provider value={values}>
      {children}
    </ProductsContext.Provider>
  );
};
