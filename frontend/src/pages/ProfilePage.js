import React, { useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import Product from '../components/Product';
import { ProductsContext } from '../context/ProductContext';

const ProfilePage = () => {
  const { fetchProducts, products, loading, error } =
    useContext(ProductsContext);

  useEffect(() => {
    fetchProducts('/api/products');
    // eslint-disable-next-line
  }, []);

  return (
    <div className='ProfilePage'>
      <h1>Protected Admin Profile Page</h1>
      {loading && <h2>Loading...</h2>}
      {error && <h2>{error}</h2>}
      <Link to='/profile/new-product'>Create New Product</Link>
      {products &&
        products?.map((product) => (
          <Product key={product._id} product={product} />
        ))}

      <div></div>
    </div>
  );
};

export default ProfilePage;
