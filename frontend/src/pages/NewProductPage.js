import React, { useState, useEffect, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import UserContext from '../context/UserContext'
import BackButton from '../components/BackButton'

const NewProductPage = () => {
  const { state } = useContext(UserContext)
  const navigate = useNavigate()

  const [product, setProduct] = useState({
    name: '',
    description: '',
    countInStock: '',
    category: '',
    price: '',
  })
  const [error, setError] = useState('')

  const handleInputChange = (event) => {
    setProduct({
      ...product,
      [event.target.name]: event.target.value,
    })
  }

  const handleFormSubmit = async (event) => {
    event.preventDefault()
    const config = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${state.userInfo.token}`,
      },
      body: JSON.stringify({
        name: product.name,
        description: product.description,
        countInStock: product.countInStock,
        category: product.category,
        price: product.price,
      }),
    }

    try {
      const response = await fetch('/api/products', config)
      if (response.status >= 400 && response.status < 600) {
        console.log(response)
        throw new Error(response.statusText)
      }
      const jsonData = await response.json()
      console.log('jsonData new product', jsonData)
      navigate('/profile')
    } catch (error) {
      setError(error.message)
    }
  }

  return (
    <div className="NewProductPage">
      <BackButton />
      <h1>New Product Page</h1>
      <form onSubmit={handleFormSubmit}>
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
        <button type="Submit">Create</button>
      </form>
    </div>
  )
}

export default NewProductPage
