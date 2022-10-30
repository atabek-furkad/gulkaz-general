import React from 'react'
import { useParams } from 'react-router-dom'

const ProductPage = () => {
  const params = useParams()

  return (
    <div className="ProductPage">
      <h2>Product Page</h2>
      <p>Product: {params.id}</p>
    </div>
  )
}

export default ProductPage
