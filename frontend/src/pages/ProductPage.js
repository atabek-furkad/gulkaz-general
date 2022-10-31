import React from 'react'
import { useParams } from 'react-router-dom'
import products from '../products'

const ProductPage = () => {
  const params = useParams()
  const product = products.find((p) => p._id == params.id)

  return (
    <div className="ProductPage">
      <h2>Product Page</h2>
      <p>Product: {product._id}</p>
      <img src={product.image} width="200" />
      <p>
        In Stock:{' '}
        <span className={product.inStock ? 'blue' : 'red'}>
          {product.inStock ? 'Yes' : 'No'}
        </span>
      </p>
    </div>
  )
}

export default ProductPage
