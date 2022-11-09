import React, { useContext, useState } from 'react'
import UserContext from '../context/UserContext'

const LoginPage = () => {
  const { state, dispatch } = useContext(UserContext)

  const [data, setData] = useState({
    email: '',
    password: '',
  })

  const handleInputChange = (event) => {
    setData({
      ...data,
      [event.target.name]: event.target.value,
    })
  }

  const handleFormSubmit = async (event) => {
    event.preventDefault()

    dispatch({
      type: 'LOGIN_START',
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

      const resJson = await response.json()
      dispatch({
        type: 'LOGIN_SUCCESS',
        userInfo: resJson,
      })
      // if (!response.ok) {
      //   dispatch({
      //     type: 'LOGIN_FAIL',
      //     payload: resJson.message,
      //   })
      // }

      localStorage.setItem('userInfo', JSON.stringify(resJson))
    } catch (error) {
      dispatch({
        type: 'LOGIN_FAIL',
        error: error.message,
      })
    } finally {
    }
  }

  return (
    <div className="LoginPage">
      <h1>Login Page</h1>
      {state?.loading ? 'Loading...' : null}
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
        {state?.error ? state.error : null}
        <button>Login</button>
      </form>
    </div>
  )
}

export default LoginPage
