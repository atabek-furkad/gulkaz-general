import { Link } from 'react-router-dom'
import React, { useContext } from 'react'
import UserContext from '../context/UserContext'
import '../styles/header.css'

const Header = () => {
  const { state } = useContext(UserContext) || localStorage.getItem('userInfo')
  console.log('header user', state.userInfo)
  return (
    <header>
      <Link to="/">
        <img src="/images/logo.png" width="50" alt="" />
      </Link>
      {state?.userInfo ? (
        <Link className="link" to={`/`}>
          Logout
        </Link>
      ) : (
        <Link className="link" to={`/login`}>
          Login
        </Link>
      )}
    </header>
  )
}

export default Header
