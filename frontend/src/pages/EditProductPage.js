import { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import UserContext from '../context/UserContext';
import useFetch from '../customHooks/useFetch';
import ProductForm from '../components/ProductForm';
import BackButton from '../components/BackButton';
import SideBar from '../components/dashboardSideBar/SideBar';

const EditProductPage = () => {
  const params = useParams();
  const { state } = useContext(UserContext);

  const { product, setProduct, loading, error } = useFetch(
    '/api/products',
    'PUT'
  );

  const [files, setFiles] = useState([]);

  const [imagesPath, setImagesPath] = useState([]);

  // get destructured all Product
  const { name, description, countInStock, category, price, topProduct } =
    product;

  useEffect(() => {
    const fetchData = async (id) => {
      try {
        const response = await fetch(`/api/products/${id}`);
        let product = await response.json();
        let getImages = product.images;
        console.log('get images', getImages);
        setProduct({
          name: product.name,
          description: product.description,
          countInStock: product.countInStock,
          category: product.category,
          price: product.price,
          topProduct: product.topProduct,
          images: product.images,
        });
        setImagesPath(getImages);
      } catch (error) {
        console.log('error', error);
      }
    };

    fetchData(params.id);
  }, [params.id, setProduct]);

  const submitForm = async (event) => {
    event.preventDefault();

    const formData = new FormData();

    // each file should be appended separately
    files.forEach((element) => formData.append('image', element));

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

    const { data } = await axios.put(
      `/api/products/${params.id}`,
      formData,
      config
    );

    console.log('data', data);

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

  return (
    <main className='profile'>
      <SideBar />
      <div className='NewProductPage container'>
        {/* <BackButton /> */}
        <h1>Edit Product</h1>
        <ProductForm {...allProps} />
      </div>
    </main>
  );
};

export default EditProductPage;
