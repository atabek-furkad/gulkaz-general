import React from 'react'
import Product from '../components/Product'
import products from '../products'

const ProductsPage = () => {
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
