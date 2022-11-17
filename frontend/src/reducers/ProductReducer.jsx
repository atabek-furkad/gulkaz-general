const ProductReducer = (state, action) => {
  switch (action.type) {
    case "FETCH_REQUEST":
      return { ...state, fetch_single_product_loading: true };
    case "FETCH_SINGLE_PRODUCT_SUCCESSFUL":
      return {
        ...state,
        fetch_single_product_loading: false,
        fetch_single_product: action.payload,
      };
    case "FETCH_SINGLE_PRODUCT_ERROR":
      return {
        ...state,
        fetch_single_product_loading: false,
        fetch_single_product_error: true,
      };
    default:
      return state;
  }
};

export default ProductReducer;
