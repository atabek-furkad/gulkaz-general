import { useNavigate } from 'react-router-dom';
import './styles/productform.scss';

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
    <div className='form-container'>
      <form onSubmit={submitForm}>
        {loading && <h2>Processing...</h2>}
        {error && <h2>{error}</h2>}
        {error && <h2>Fill all the inputs</h2>}
        <div className='container'>
          <div className='flex-container'>
            <div className='input-container'>
              <label htmlFor='name'>Name:</label>
              <input
                className='input-style'
                id='name'
                name='name'
                type='text'
                value={product.name}
                onChange={handleInputChange}
              />
            </div>
            <div className='input-container'>
              <label htmlFor='topProduct'>Top product:</label>
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
          </div>

          <div className='flex-container'>
            <div className='input-container'>
              <label htmlFor='category'>Category:</label>
              <input
                className='input-style'
                id='category'
                name='category'
                type='text'
                value={product.category}
                onChange={handleInputChange}
              />
            </div>
            <div className='input-container'>
              <label htmlFor='countInStock'>CountInStock:</label>
              <input
                className='input-style'
                id='countInStock'
                name='countInStock'
                type='number'
                value={product.countInStock}
                onChange={handleInputChange}
              />
            </div>
          </div>

          <div className='flex-container'>
            <div className='input-container'>
              <label htmlFor='price'>Price:</label>
              <input
                className='input-style'
                id='price'
                name='price'
                type='number'
                value={product.price}
                onChange={handleInputChange}
              />
            </div>
            <div className='input-container center'>
              <label htmlFor='description'>Description:</label>
              {/* <input type='text' /> */}
            </div>
          </div>
          <div className='flex-container'>
            <textarea
              id='description'
              className='description'
              name='description'
              type='text'
              placeholder='write description less than 500 words'
              value={product.description}
              onChange={handleInputChange}
              row='4'
              cols='50'
            />
          </div>

          {/* Image container */}
          <div className='flex-container'>
            {/* {uploading && <h2>Uploading...</h2>} */}
            <div className='input-container'>
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

            {/* Start button */}
            <div className='input-container'>
              <button type='Submit' className='create-btn'>
                Create
              </button>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  navigate('/profile');
                }}
                className='cancel-btn'
              >
                Cancel
              </button>
            </div>
            {/* End Button */}
          </div>

          <div className='img-container'>
            {/* Image path */}
            {imagesPath &&
              imagesPath.map((element, index) => {
                return (
                  <div key={index}>
                    <img
                      src={`/${element.fileName}`}
                      width='100'
                      alt='product'
                      className='img-product'
                    />
                    <p>{element.originalname}</p>
                  </div>
                );
              })}
            {/* End Image path */}
          </div>
        </div>
      </form>
    </div>
  );
};

export default ProductForm;
