import React from 'react'
import Product from '../components/Product'
import products from '../products'

const Products = () => {
  return (
    <>
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </>
  )
}

export default Products
