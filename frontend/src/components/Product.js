import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import UserContext from '../context/UserContext';

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

  const imagePath = product.image.slice(16);

  return (
    <div>
      <form
        onSubmit={(event) => {
          // event.preventDefault()
          handleFormSubmit(product._id);
        }}
      >
        <Link to={`/products/${product._id}`}>{product.name}</Link>
        {/* {imagePath.map((images, index) => (
          <img src={images} key={index} alt='' />
        ))} */}
        {imagePath.map((images, index) => {
          return <img src={images} alt='' key={index} />;
        })}

        <Link to={`/profile/edit-product/${product._id}`}>Edit</Link>
        <button>Delete</button>
      </form>
    </div>
  );
};

export default Product;
