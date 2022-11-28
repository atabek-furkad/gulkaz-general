import React from 'react';

const GlobalFormHandle = ({
  fetchData,
  loading,
  error,
  product,
  handleInputChange,
  setProduct,
  uploading,
  uploadFileHandler,
  imagePaths,
  navigate,
  handleImagePaths,
  handleCancel,
  displayProductImages,
}) => {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        fetchData();
      }}
    >
      {loading && <h2>Processing...</h2>}
      {error && <h2>{error}</h2>}
      {error && <h2>Fill all the inputs</h2>}

      <div className='input-container'>
        <label htmlFor='name'>Name</label>
        <input
          id='name'
          name='name'
          type='text'
          value={product.name}
          onChange={handleInputChange}
        />
      </div>
      <div className='input-container'>
        <label htmlFor='description'>Description</label>
        <input
          id='description'
          name='description'
          type='text'
          value={product.description}
          onChange={handleInputChange}
        />
      </div>
      <div className='input-container'>
        <label htmlFor='countInStock'>CountInStock</label>
        <input
          id='countInStock'
          name='countInStock'
          type='number'
          value={product.countInStock}
          onChange={handleInputChange}
        />
      </div>
      <div className='input-container'>
        <label htmlFor='category'>Category</label>
        <input
          id='category'
          name='category'
          type='text'
          value={product.category}
          onChange={handleInputChange}
        />
      </div>
      <div className='input-container'>
        <label htmlFor='price'>Price</label>
        <input
          id='price'
          name='price'
          type='number'
          value={product.price}
          onChange={handleInputChange}
        />
      </div>
      <div className='input-container'>
        <label htmlFor='topProduct'>Top product</label>
        <select
          id='topProduct'
          name='topProduct'
          value={
            product.topProduct
              ? product.topProduct
              : setProduct({ ...product, topProduct: 'false' })
          }
          onChange={handleInputChange}
        >
          <option value={'false'}>No</option>
          <option value={'true'}>Yes</option>
        </select>
      </div>

      <div className='input-container'>
        {uploading && <h2>Uploading...</h2>}
        <label htmlFor='image-upload'>Choose a picture:</label>
        <input
          type='file'
          id='image-upload'
          name='image-upload'
          multiple='multiple'
          accept='image/png, image/jpeg, image/png'
          onChange={uploadFileHandler}
        />
      </div>
      {handleImagePaths}
      {displayProductImages}
      <button type='Submit'>Create</button>
      {handleCancel}
    </form>
  );
};

export default GlobalFormHandle;
