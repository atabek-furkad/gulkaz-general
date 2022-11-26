import BackButton from '../components/BackButton'
import useFetch from '../customHooks/useFetch'
import { useState, useEffect, useContext } from 'react'
import UserContext from '../context/UserContext'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const NewProductPage = () => {
  const { product, setProduct, loading, error, fetchData } = useFetch(
    '/api/products',
    'POST',
  )

  useFetch(() => {
    console.log('product', product)
  }, [product])

  const [uploading, setUploading] = useState(false)

  const [imagePath, setImagePath] = useState([])

  const uploadFileHandler = async (e) => {
    setUploading(true)
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

    const imagePaths = await data.map((image) => image.path)

    setProduct({
      ...product,
      image: imagePaths,
    })

    const links = data.map((file) => file.path.slice(15))

    setImagePath(links)

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
        {imagePath.map((path, index) => {
          console.log('path', path)
          return <img width="100" key={index} src={path} alt="" />
        })}
        <button type="Submit">Create</button>
      </form>
    </div>
  )
}

export default NewProductPage
