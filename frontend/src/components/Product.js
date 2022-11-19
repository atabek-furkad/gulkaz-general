import React, { useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "../context/UserContext";

const Product = ({ product }) => {
  const { state } = useContext(UserContext);

  const handleFormSubmit = async (id) => {
    const config = {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${state.userInfo.token}`,
      },
    };
    await fetch(`/api/products/${id}`, config);
  };

  return (
    <div>
      <form
        onSubmit={(event) => {
          // event.preventDefault()
          handleFormSubmit(product._id);
        }}
      >
        <Link to={`/products/${product._id}`}>{product.name}</Link>
        <img src={product.image} height="100" alt="product-name" />
        <Link to={`/edit/product/${product._id}`}>Edit Product</Link>
        <button>Delete</button>
      </form>
    </div>
  );
};

export default Product;
