import React, { useState, useContext } from 'react'
import { AuthContext } from '../App'

const LoginPage = () => {
  const { dispatch } = useContext(AuthContext)

  const [data, setData] = useState({
    email: '',
    password: '',
    isSubmitting: false,
    errorMessage: null,
  })

  const handleInputChange = (event) => {
    setData({
      ...data,
      [event.target.name]: event.target.value,
    })
  }

  const handleFormSubmit = async (event) => {
    event.preventDefault()
    setData({
      ...data,
      isSubmitting: true,
      errorMessage: null,
    })

    const config = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: data.email,
        password: data.password,
      }),
    }

    try {
      const response = await fetch('/api/users/login', config)
      if (!response.ok) throw new Error()
      const resJson = await response.json()
      dispatch({
        type: 'LOGIN',
        payload: resJson,
      })
    } catch (error) {
      setData({
        ...data,
        isSubmitting: false,
        errorMessage: error.message || error.statusText,
      })
      console.log(error)
    }
    console.log('data', data)
  }

  return (
    <div className="LoginPage">
      <h1>Login Page</h1>
      <form onSubmit={handleFormSubmit}>
        <div className="input-container">
          <label htmlFor="email">Email</label>
          <input
            autoFocus
            id="email"
            name="email"
            type="email"
            value={data.email}
            onChange={handleInputChange}
          />
        </div>
        <div className="input-container">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            value={data.password}
            onChange={handleInputChange}
            name="password"
            id="password"
          />
        </div>
        {/* make with setTimeout the error is shown for a couple of seconds */}
        {/* {data.errorMessage && <div>{data.errorMessage}</div>} */}
        <button disabled={data.isSubmitting}>
          {data.isSubmitting ? 'Loading...' : 'Login'}
        </button>
      </form>
    </div>
  )
}

export default LoginPage
