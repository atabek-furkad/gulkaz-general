import React from 'react'
import '../styles/error.css'
import BackButton from '../components/BackButton'

const ErrorPage = () => {
  return (
    <div className="error">
      <h1>Page Not Found</h1>
      <BackButton />
    </div>
  )
}

export default ErrorPage
