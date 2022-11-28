const ProductsReducer = (state, action) => {
  switch (action.type) {
    case 'GET_PRODUCTS_IS_LOADING':
      return {
        ...state,
        loading: true,
      };

    case 'GET_PRODUCTS_SUCCESSFUL':
      return {
        ...state,
        loading: false,
        products: action.payload,
      };

    case 'GET_PRODUCTS_FAILED':
      return {
        ...state,
        loading: false,
        error: true,
      };

    default:
      return state;
  }
};

export default ProductsReducer;
