import React from 'react'

const Product = ({ product }) => {
  return (
    <div>
      <a href={`/product/${product._id}`}>{product.name}</a>
      <img src={product.image} height="100" />
    </div>
  )
}

export default Product
