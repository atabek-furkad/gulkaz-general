import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Product from '../components/Product';
import SideBar from '../components/dashboardSideBar/SideBar';
import '../components/styles/product.scss';
import { AiOutlineSearch } from 'react-icons/ai';
import { TbArrowBigLeftLine } from 'react-icons/tb';
import { TbArrowBigRightLine } from 'react-icons/tb';

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
          <span className='filter-search'>
            <p>2 Products Found</p>
          </span>
          <hr />
          <span className='sort-product'>
            Sort by:
            <select name='name' id='product'>
              <option value='volvo'>Price Lowest</option>
              <option value='saab'>Price Hightest</option>
              <option value='opel'>Name A - Z</option>
              <option value='audi'>Name Z - A</option>
            </select>
          </span>
        </div>
        <div className='flex-product'>
          {products &&
            products?.map((product) => (
              <Product key={product._id} product={product} />
            ))}
          <div></div>
        </div>
        <div className='pagination-cont'>
          <div className='cont'>
            <span className='icon-arrow'>
              <TbArrowBigLeftLine />
              <button>Prev</button>
            </span>
            <span className='icon-arrow'>
              <button>Next</button>
              <TbArrowBigRightLine />
            </span>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProfilePage;
