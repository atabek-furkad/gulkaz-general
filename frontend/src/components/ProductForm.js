import { useNavigate } from 'react-router-dom';

const ProductForm = ({
  product,
  setProduct,
  loading,
  error,
  setFiles,
  imagesPath,
  submitForm,
  imagesPathTest,
}) => {
  const navigate = useNavigate();

  const handleInputChange = (event) => {
    setProduct({
      ...product,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <div>
      <form onSubmit={submitForm}>
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
            value={product && product.topProduct}
            onChange={handleInputChange}
          >
            <option hidden>--</option>
            <option value={'false'}>No</option>
            <option value={'true'}>Yes</option>
          </select>
        </div>

        <div className='input-container'>
          {/* {uploading && <h2>Uploading...</h2>} */}
          <label htmlFor='imageUpload'>Choose a picture:</label>
          <input
            type='file'
            id='imageUpload'
            name='imageUpload'
            multiple='multiple'
            onChange={(e) => {
              const filesArray = Object.values(e.target.files);
              setFiles(filesArray);
            }}
            accept='image/*'
            // accept="image/png, image/jpeg, image/png"
            // onChange={uploadFileHandler}
          />
        </div>
        {imagesPath &&
          imagesPath.map((element, index) => {
            return (
              <div key={index}>
                <img src={`/${element.fileName}`} width='100' alt='product' />
                <p>{element.originalname}</p>
              </div>
            );
          })}
        <button type='Submit'>Create</button>
        <button
          onClick={(e) => {
            e.preventDefault();
            navigate('/profile');
          }}
        >
          Cancel
        </button>
      </form>
    </div>
  );
};

export default ProductForm;
