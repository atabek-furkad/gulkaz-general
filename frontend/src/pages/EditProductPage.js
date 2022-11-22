import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import useFetch from '../customHooks/useFetch'
import BackButton from '../components/BackButton'
import axios from 'axios'

const EditProductPage = () => {
  const params = useParams()

  const { product, setProduct, loading, error, fetchData } = useFetch(
    `/api/products/${params.id}`,
    'PUT',
  )

  const [uploading, setUploading] = useState(false)

  const uploadFileHandler = async (e) => {
    const file = e.target.files[0]
    const formData = new FormData()
    formData.append('image', file)
    setUploading(true)
    console.log('file', file)

    try {
      const config = {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      }

      const { data } = await axios.post('/api/upload', formData, config)

      console.log('image path data', data)
      setProduct({
        ...product,
        image: `${await data}`,
      })
      console.log('product', product)
      setUploading(false)
    } catch (error) {
      console.error(error)
      setUploading(false)
    }
  }

  const handleInputChange = (event) => {
    setProduct({
      ...product,
      [event.target.name]: event.target.value,
    })
  }

  useEffect(() => {
    const fetchData = async (id) => {
      try {
        const response = await fetch(`/api/products/${id}`)
        const product = await response.json()
        setProduct({
          name: product.name,
          description: product.description,
          countInStock: product.countInStock,
          category: product.category,
          price: product.price,
          topProduct: product.topProduct,
          image: product.image,
        })
        console.log('product ', product)
      } catch (error) {
        console.log('error', error)
      }
    }

    fetchData(params.id)
  }, [])

  return (
    <div className="EditProductPage">
      <BackButton />
      <h1>Edit Product Page</h1>
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
            value={product.topProduct}
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
            accept="image/png, image/jpeg, image/png"
            onChange={uploadFileHandler}
          />
        </div>
        <button type="Submit">Edit</button>
      </form>
    </div>
  )
}

export default EditProductPage
