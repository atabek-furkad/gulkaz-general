import React, { useEffect, useContext } from 'react';
import Product from './Product';
import { ProductsContext } from '../context/ProductContext';

const ProductsList = () => {
  const { fetchProducts, products, loading, error } =
    useContext(ProductsContext);
  console.log("what's products", products);
  useEffect(() => {
    fetchProducts('/api/products');
    // eslint-disable-next-line
  }, []);

  if (loading) {
    return <h1>IS Loading...</h1>;
  }

  if (error) {
    return <h1>Oop Is Error...</h1>;
  }

  return (
    <div className='ProductsList'>
      <h2>Products</h2>
      {products.map((product) => (
        <Product key={product._id} product={product} />
      ))}
    </div>
  );
};

export default ProductsList;
