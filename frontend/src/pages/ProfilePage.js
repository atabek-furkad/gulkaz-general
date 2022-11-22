import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Product from '../components/Product'

const ProfilePage = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('/api/products')
        if (response.status >= 400 && response.status < 600) {
          console.log(response)
          throw new Error(response.statusText)
        }
        const dataJson = await response.json()
        setProducts(dataJson)
        console.log('dataJson ProfilePage', dataJson)
      } catch (error) {
        console.log('error', error)
      }
    }
    fetchProducts()
  }, [])

  console.log('give us Admin Page')

  return (
    <div className="ProfilePage">
      <h1>Protected Admin Profile Page</h1>
      <Link to="/profile/new-product">Create New Product</Link>
      {products &&
        products?.map((product) => (
          <Product key={product._id} product={product} />
        ))}

      <div></div>
    </div>
  )
}

export default ProfilePage
