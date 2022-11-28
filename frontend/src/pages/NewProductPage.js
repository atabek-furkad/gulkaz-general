import BackButton from '../components/BackButton'
import useFetch from '../customHooks/useFetch'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const NewProductPage = () => {
  const navigate = useNavigate()
  const { product, setProduct, loading, error, fetchData } = useFetch(
    '/api/products',
    'POST',
  )

  useFetch(() => {
    console.log('product', product)
  }, [product])

  const [uploading, setUploading] = useState(false)

  const [imagePaths, setImagePaths] = useState([])

  const [pathList, setPathList] = useState([])

  const unlinkFiles = async () => {
    if (pathList.length > 0) {
      console.log('pathList', pathList)
      const { data } = await axios.post('/api/upload/unlink', pathList)
      console.log('data', data)
    }
  }

  const uploadFileHandler = async (e) => {
    setUploading(true)

    await unlinkFiles()

    // object of objects turning into array of objects
    const arrayOfFiles = Object.values(e.target.files)

    const galleryData = new FormData()

    arrayOfFiles.forEach((index) => galleryData.append('image', index))

    const config = {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    }

    const { data } = await axios.post('/api/upload', galleryData, config)

    setPathList(data)

    console.log('pathList', pathList)
    const tempImagePaths = await data.map((element) => element.path)

    setProduct({
      ...product,
      images: tempImagePaths,
    })

    const tempSlicedLinks = data.map((file) => file.path.slice(15))

    setImagePaths(tempSlicedLinks)

    setUploading(false)
  }

  const handleInputChange = (event) => {
    setProduct({
      ...product,
      [event.target.name]: event.target.value,
    })
  }

  return (
    <div className="NewProductPage">
      <BackButton />
      <h1>New Product Page</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault()
          fetchData()
        }}
      >
        {loading && <h2>Processing...</h2>}
        {error && <h2>{error}</h2>}
        {error && <h2>Fill all the inputs</h2>}

        <div className="input-container">
          <label htmlFor="name">Name</label>
          <input
            id="name"
            name="name"
            type="text"
            value={product.name}
            onChange={handleInputChange}
          />
        </div>
        <div className="input-container">
          <label htmlFor="description">Description</label>
          <input
            id="description"
            name="description"
            type="text"
            value={product.description}
            onChange={handleInputChange}
          />
        </div>
        <div className="input-container">
          <label htmlFor="countInStock">CountInStock</label>
          <input
            id="countInStock"
            name="countInStock"
            type="number"
            value={product.countInStock}
            onChange={handleInputChange}
          />
        </div>
        <div className="input-container">
          <label htmlFor="category">Category</label>
          <input
            id="category"
            name="category"
            type="text"
            value={product.category}
            onChange={handleInputChange}
          />
        </div>
        <div className="input-container">
          <label htmlFor="price">Price</label>
          <input
            id="price"
            name="price"
            type="number"
            value={product.price}
            onChange={handleInputChange}
          />
        </div>
        <div className="input-container">
          <label htmlFor="topProduct">Top product</label>
          <select
            id="topProduct"
            name="topProduct"
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

        <div className="input-container">
          {uploading && <h2>Uploading...</h2>}
          <label htmlFor="image-upload">Choose a picture:</label>
          <input
            type="file"
            id="image-upload"
            name="image-upload"
            multiple="multiple"
            accept="image/png, image/jpeg, image/png"
            onChange={uploadFileHandler}
          />
        </div>
        {imagePaths.map((path, index) => (
          <img width="100" key={index} src={path} alt="" />
        ))}
        <button type="Submit">Create</button>
        <button
          onClick={(e) => {
            e.preventDefault()
            unlinkFiles()
            navigate('/profile')
          }}
        >
          Cancel
        </button>
      </form>
    </div>
  )
}

export default NewProductPage
