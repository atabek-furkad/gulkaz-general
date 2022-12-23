import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import UserContext from '../context/UserContext';
import useImage from '../images/wall-frame.webp';
import './styles/product.scss';
import { BsFillDashCircleFill } from 'react-icons/bs';
import { BsFillPencilFill } from 'react-icons/bs';

const Product = ({ product }) => {
  const { state } = useContext(UserContext);

  const handleFormSubmit = async (id) => {
    const config = {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${state.userInfo.token}`,
      },
    };
    await fetch(`/api/products/${id}`, config);
  };

  // const showImages = product.images.map((image) => image.slice(15))

  return (
    <main className='main-prod'>
      <section
        onSubmit={() => {
          handleFormSubmit(product._id);
        }}
        className='product-container'
      >
        <div className='productImg'>
          <img src={useImage} alt='product_img' className='img' />
        </div>
        <div className='footer'>
          <button className='deleteBtn'>
            <span>
              <BsFillDashCircleFill className='icon' />
              Delete
            </span>
          </button>
          <Link to={`/profile/edit-product/${product._id}`} className='editBtn'>
            <span>
              <BsFillPencilFill className='icon' />
              Edit
            </span>
          </Link>
        </div>
      </section>
    </main>
  );
};

export default Product;
