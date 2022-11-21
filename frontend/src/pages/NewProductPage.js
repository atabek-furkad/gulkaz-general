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

  // const { state } = useContext(UserContext)
  // const navigate = useNavigate()

  // const [product, setProduct] = useState({
  //   name: '',
  //   description: '',
  //   countInStock: '',
  //   category: '',
  //   price: '',
  //   image: '',
  // })

  // const [error, setError] = useState(false)
  // const [loading, setLoading] = useState(false)
  const [uploading, setUploading] = useState(false)

  // const config = {
  //   method: 'POST',
  //   headers: {
  //     'Content-Type': 'application/json',
  //     Authorization: `Bearer ${state.userInfo.token}`,
  //   },
  //   body: JSON.stringify({
  //     name: product.name,
  //     description: product.description,
  //     countInStock: product.countInStock,
  //     category: product.category,
  //     price: product.price,
  //     image: product.image,
  //   }),
  // }

  useEffect(() => {
    console.log('product', product)
  }, [product])

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

  // const handleFormSubmit = async () => {
  //   setLoading(true)
  //   try {
  //     const response = await fetch('/api/products', config)
  //     if (response.status >= 400 && response.status < 600) {
  //       console.log(response)
  //       throw new Error(response.statusText)
  //     }
  //     const received = await response.json()
  //     console.log('received data', received)
  //     // setProduct(received)
  //     navigate('/profile')
  //   } catch (error) {
  //     setError(error.message)
  //   } finally {
  //     setLoading(false)
  //   }
  // }

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

        <div className="input-container">
          <label htmlFor="name">name</label>
          <input
            id="name"
            name="name"
            type="text"
            value={product.name}
            onChange={handleInputChange}
          />
        </div>
        <div className="input-container">
          <label htmlFor="description">description</label>
          <input
            id="description"
            name="description"
            type="text"
            value={product.description}
            onChange={handleInputChange}
          />
        </div>
        <div className="input-container">
          <label htmlFor="countInStock">countInStock</label>
          <input
            id="countInStock"
            name="countInStock"
            type="number"
            value={product.countInStock}
            onChange={handleInputChange}
          />
        </div>
        <div className="input-container">
          <label htmlFor="category">category</label>
          <input
            id="category"
            name="category"
            type="text"
            value={product.category}
            onChange={handleInputChange}
          />
        </div>
        <div className="input-container">
          <label htmlFor="price">price</label>
          <input
            id="price"
            name="price"
            type="number"
            value={product.price}
            onChange={handleInputChange}
          />
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
        <button type="Submit">Create</button>
      </form>
    </div>
  )
}

export default NewProductPage
