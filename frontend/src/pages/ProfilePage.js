import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const ProfilePage = () => {
  const [products, setProducts] = useState({})

  useEffect(() => {
    // const config = {
    //   method: 'POST',
    //   headers: {
    //     Authorisation: `Bearer ${userInfo.token}`,
    //   },
    // }
  }, [])

  console.log('give us Admin Page')

  return (
    <div className="ProfilePage">
      <h1>Protected Admin Profile Page</h1>
      <Link to="/profile/new-product">Create New Product</Link>
    </div>
  )
}

export default ProfilePage
