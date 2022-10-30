import React from 'react'
import Product from '../components/Product'
import products from '../products'

const Products = () => {
  return (
    <>
      <h2>Products</h2>
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </>
  )
}

export default Products
