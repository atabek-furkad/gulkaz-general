import { useState, useContext } from 'react';
import axios from 'axios';
import UserContext from '../context/UserContext';
import useFetch from '../customHooks/useFetch';
import ProductForm from '../components/ProductForm';
import BackButton from '../components/BackButton';
import SideBar from '../components/dashboardSideBar/SideBar';
// import '../components/styles/productform.scss';
import '../components/styles/newproductpage.scss';

const NewProductPage = () => {
  const { state } = useContext(UserContext);
  const { product, setProduct, loading, error } = useFetch(
    '/api/products',
    'POST'
  );

  const [files, setFiles] = useState([]);

  const [imagesPath, setImagesPath] = useState([]);

  const submitForm = async (event) => {
    event.preventDefault();

    const formData = new FormData();

    // each file should be appended separately
    files.forEach((element) => formData.append('image', element));

    // get destructured all Product
    const { name, description, countInStock, category, price, topProduct } =
      product;

    formData.append('name', name);
    formData.append('description', description);
    formData.append('countInStock', countInStock);
    formData.append('category', category);
    formData.append('price', price);
    formData.append('topProduct', topProduct);

    const config = {
      headers: {
        'Content-Type': 'multipart/form-data',
        Authorization: `Bearer ${state.userInfo.token}`,
      },
    };

    const { data } = await axios.post('/api/products', formData, config);

    console.log('data', data);
    console.log('images', data.images);
    setImagesPath(data.images);
  };

  const allProps = {
    product,
    setProduct,
    loading,
    error,
    submitForm,
    setFiles,
    imagesPath,
  };

  console.log('what is the product, from New product', product);

  return (
    <main className='profile'>
      <SideBar />
      <div className='NewProductPage container'>
        {/* <BackButton /> */}
        <h1>New Product Page</h1>
        <ProductForm {...allProps} />
      </div>
    </main>
  );
};

export default NewProductPage;
