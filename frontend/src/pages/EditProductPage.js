import React from "react";
import { useParams } from "react-router-dom";
import BackButton from "../components/BackButton";
import { useFetchData } from "../hook/HandleGlobalForm";

const EditProductPage = () => {
  const { id } = useParams();

  const { handleFormSubmit, error, handleInputChange, product } = useFetchData(
    `/api/products/${id}`
  );

  return (
    <div className="EditProductPage">
      <BackButton />
      <h1>Edit Product Page</h1>
      <form onSubmit={handleFormSubmit}>
        {error && <h2>{error}</h2>}
        <div className="input-container">
          <label htmlFor="name">name</label>
          <input
            id="name"
            name="name"
            type="text"
            value={product.name}
            onChange={(event) => {
              handleInputChange(event);
            }}
          />
        </div>
        <div className="input-container">
          <label htmlFor="description">description</label>
          <input
            id="description"
            name="description"
            type="text"
            value={product.description}
            onChange={(event) => {
              handleInputChange(event);
            }}
          />
        </div>
        <div className="input-container">
          <label htmlFor="countInStock">countInStock</label>
          <input
            id="countInStock"
            name="countInStock"
            type="number"
            value={product.countInStock}
            onChange={(event) => {
              handleInputChange(event);
            }}
          />
        </div>
        <div className="input-container">
          <label htmlFor="category">category</label>
          <input
            id="category"
            name="category"
            type="text"
            value={product.category}
            onChange={(event) => {
              handleInputChange(event);
            }}
          />
        </div>
        <div className="input-container">
          <label htmlFor="price">price</label>
          <input
            id="price"
            name="price"
            type="number"
            value={product.price}
            onChange={(event) => {
              handleInputChange(event);
            }}
          />
        </div>
        <button type="Submit">Edit</button>
      </form>
    </div>
  );
};

export default EditProductPage;
