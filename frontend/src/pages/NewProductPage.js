import BackButton from '../components/BackButton';
import useFetch from '../customHooks/useFetch';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import GlobalFormHandle from '../components/GlobalFormHandle';

const NewProductPage = () => {
  const navigate = useNavigate();
  const { product, setProduct, loading, error, fetchData } = useFetch(
    '/api/products',
    'POST'
  );

  useFetch(() => {
    console.log('product', product);
  }, [product]);

  const [uploading, setUploading] = useState(false);

  const [imagePaths, setImagePaths] = useState([]);

  const [pathList, setPathList] = useState([]);

  const unlinkFiles = async () => {
    if (pathList.length > 0) {
      console.log('pathList', pathList);
      const { data } = await axios.post('/api/upload/unlink', pathList);
      console.log('data', data);
    }
  };

  const uploadFileHandler = async (e) => {
    setUploading(true);

    await unlinkFiles();

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

    setPathList(data);

    console.log('pathList', pathList);
    const tempImagePaths = await data.map((element) => element.path);

    setProduct({
      ...product,
      images: tempImagePaths,
    });

    const tempSlicedLinks = data.map((file) => file.path.slice(15));

    setImagePaths(tempSlicedLinks);

    setUploading(false);
  };

  const handleInputChange = (event) => {
    setProduct({
      ...product,
      [event.target.name]: event.target.value,
    });
  };

  const handleImagePaths = imagePaths?.map((path, index) => (
    <img width='100' key={index} src={path} alt='' />
  ));

  const handleCancel = (
    <button
      onClick={(e) => {
        e.preventDefault();
        unlinkFiles();
        navigate('/profile');
      }}
    >
      Cancel
    </button>
  );

  const allProperty = {
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
  };

  return (
    <div className='NewProductPage'>
      <BackButton />
      <h1>New Product Page</h1>
      <GlobalFormHandle {...allProperty} />
    </div>
  );
};

export default NewProductPage;
