import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import useFetch from '../customHooks/useFetch';
import BackButton from '../components/BackButton';
import axios from 'axios';
import GlobalFormHandle from '../components/GlobalFormHandle';

const EditProductPage = () => {
  const params = useParams();

  const { product, setProduct, loading, error, fetchData } = useFetch(
    `/api/products/${params.id}`,
    'PUT'
  );

  const [uploading, setUploading] = useState(false);

  const uploadFileHandler = async (e) => {
    setUploading(true);

    // object of objects turning into array of objects
    const arrayOfFiles = Object.values(e.target.files);

    const galleryData = new FormData();

    arrayOfFiles.forEach((index) => galleryData.append('image', index));

    const config = {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    };

    const { data } = await axios.post('/api/upload', galleryData, config);

    const tempImagePaths = await data.map((image) => image.path);

    setProduct({
      ...product,
      images: tempImagePaths,
    });

    setUploading(false);
  };

  const handleInputChange = (event) => {
    setProduct({
      ...product,
      [event.target.name]: event.target.value,
    });
  };

  useEffect(() => {
    const fetchData = async (id) => {
      try {
        const response = await fetch(`/api/products/${id}`);
        const product = await response.json();
        setProduct({
          name: product.name,
          description: product.description,
          countInStock: product.countInStock,
          category: product.category,
          price: product.price,
          topProduct: product.topProduct,
          images: product.images,
        });
      } catch (error) {
        console.log('error', error);
      }
    };

    fetchData(params.id);
    // eslint-disable-next-line
  }, []);

  const displayProductImages = product.images.map((element, index) => {
    const path = element.slice(15);
    return <img src={path} alt='product' width='100' key={index} />;
  });

  const allProperty = {
    fetchData,
    loading,
    error,
    product,
    handleInputChange,
    setProduct,
    uploading,
    uploadFileHandler,
    displayProductImages,
  };

  return (
    <div className='EditProductPage'>
      <BackButton />
      <h1>Edit Product Page</h1>
      <GlobalFormHandle {...allProperty} />
    </div>
  );
};

export default EditProductPage;
