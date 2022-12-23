import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Product from '../components/Product';
import SideBar from '../components/dashboardSideBar/SideBar';
import '../components/styles/product.scss';
import { AiOutlineSearch } from 'react-icons/ai';

const ProfilePage = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const response = await fetch('/api/products');
        if (response.status >= 400 && response.status < 600) {
          console.log(response);
          throw new Error(response.statusText);
        }
        const dataJson = await response.json();
        setProducts(dataJson);
      } catch (error) {
        setError(error.message);
        console.log('error', error);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  return (
    <main className='profile'>
      <SideBar />
      <div className='ProfilePage container'>
        {loading && <h2>Loading...</h2>}
        {error && <h2>{error}</h2>}
        <div className='search'>
          <span className='search-box'>
            <button>
              <AiOutlineSearch className='search-icon' />
            </button>
            <input placeholder='Search....' />
          </span>
        </div>
        <Link to='/profile/new-product'>Create New Product</Link>
        <div className='flex-product'>
          {products &&
            products?.map((product) => (
              <Product key={product._id} product={product} />
            ))}

          <div></div>
        </div>
      </div>
    </main>
  );
};

export default ProfilePage;
