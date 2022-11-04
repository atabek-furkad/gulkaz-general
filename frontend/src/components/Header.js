import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header>
      <Link to="/">
        <img src="/images/logo.png" width="50" />
      </Link>
      <Link className="link" to={`/authorize`}>
        Login
      </Link>
    </header>
  )
}

export default Header
