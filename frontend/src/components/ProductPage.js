import React from 'react'
import { useParams } from 'react-router-dom'

const ProductPage = () => {
  const params = useParams()

  return (
    <>
      <h2>Product Page</h2>
      <p>Product: {params.id}</p>
    </>
  )
}

export default ProductPage
