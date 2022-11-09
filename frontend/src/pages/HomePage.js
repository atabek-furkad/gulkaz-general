import React, { useContext } from 'react'
import UserContext from '../context/UserContext'

const HomePage = () => {
  const { state } = useContext(UserContext)
  console.log('in home page', state)
  return <div className="HomePage">Home Page</div>
}

export default HomePage
