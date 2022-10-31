import React, { useState, useEffect } from 'react'
import Product from '../components/Product'
import axios from 'axios'

const ProductsPage = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await axios.get('/api/products')
      console.log(data)
      // const data = await response.json()
      setProducts(data)
    }
    fetchProducts()
  }, [])

  return (
    <div className="ProductsPage">
      <h2>Products</h2>
      {products.map((product) => (
        <Product key={product._id} product={product} />
      ))}
    </div>
  )
}

export default ProductsPage
