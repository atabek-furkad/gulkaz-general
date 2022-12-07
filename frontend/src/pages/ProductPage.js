import React, { useEffect, useContext } from 'react'
import { useParams } from 'react-router-dom'

import UserContext from '../context/UserContext'

const ProductPage = () => {
  const { state } = useContext(UserContext)
  const params = useParams()

  useEffect(() => {
    const fetchData = async () => {
      const config = {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${state.userInfo.token}`,
        },
      }
      const response = await fetch(`/api/products/${params.id}`, config)
      const data = await response.json()
      console.log('Data', data)
    }

    fetchData()
  }, [params.id])

  return <div className="ProductPage"></div>
}

export default ProductPage
