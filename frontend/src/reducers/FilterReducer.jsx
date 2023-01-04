const filter_sort = (state, action) => {
  // sort all products according to their filters
  if (action.type === 'SORT_PRODUCTS') {
    const { sort, filtered_products } = state;
    let tempProducts = [...filtered_products];
    console.log(tempProducts);
    if (sort === 'price-lowest') {
      tempProducts = tempProducts.sort((a, b) => a.price - b.price);
    }
    if (sort === 'price-highest') {
      tempProducts = tempProducts.sort((a, b) => b.price - a.price);
    }
    if (sort === 'name-a') {
      tempProducts = tempProducts.sort((a, b) => a.name.localeCompare(b.name));
    }
    if (sort === 'name-z') {
      tempProducts = tempProducts.sort((a, b) => b.name.localeCompare(a.name));
    }
    return { ...state, filtered_products: tempProducts };
  }
};

export default filter_sort;
