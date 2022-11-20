import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import useFetch from '../customHooks/useFetch'
import BackButton from '../components/BackButton'

const EditProductPage = () => {
  const params = useParams()

  const { product, setProduct, loading, error, fetchData } = useFetch(
    `/api/products/${params.id}`,
    'PUT',
  )

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
        })
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
        <button type="Submit">Edit</button>
      </form>
    </div>
  )
}

export default EditProductPage
