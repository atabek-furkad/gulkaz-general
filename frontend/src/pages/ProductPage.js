import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const ProductPage = () => {
  const params = useParams()
  const [product, setProduct] = useState({})

  useEffect(() => {
    const fetchProduct = async () => {
      const { data } = await axios.get(`/api/products/${params.id}`)
      // console.log(data)
      setProduct(data)
    }
    fetchProduct()
  }, [params])

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
