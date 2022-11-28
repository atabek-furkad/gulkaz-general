import React, { useReducer, createContext } from 'react';

import initialState from '../initialStates/initialProductState';
import reducer from '../reducers/ProductsReducer';

export const ProductsContext = createContext();
export const ProductsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchProducts = async (url) => {
    dispatch({ type: 'GET_PRODUCTS_IS_LOADING' });
    try {
      const response = await fetch(url);
      if (response.status >= 400 && response.status < 600) {
        console.log(response);
        throw new Error(response.statusText);
      }
      const dataJson = await response.json();
      dispatch({ type: 'GET_PRODUCTS_SUCCESSFUL', payload: dataJson });
    } catch (error) {
      console.log('error', error);
      dispatch({ type: 'GET_PRODUCTS_FAILED' });
    }
  };

  return (
    <ProductsContext.Provider value={{ ...state, fetchProducts }}>
      {children}
    </ProductsContext.Provider>
  );
};
