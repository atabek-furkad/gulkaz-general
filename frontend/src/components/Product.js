import React from 'react'
import { Link } from 'react-router-dom'

const Product = ({ product }) => {
  return (
    <div>
      <Link to={`/products/${product._id}`}>{product.name}</Link>
      <img src={product.image} height="100" />
    </div>
  )
}

export default Product
