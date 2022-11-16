import { Navigate } from 'react-router-dom'
import UserContext from '../context/UserContext'
import { useContext } from 'react'

const Protected = ({ children }) => {
  const { state } = useContext(UserContext)
  console.log('protected', JSON.parse(state.userInfo))
  if (!JSON.parse(state.userInfo)) {
    return <Navigate to="/" replace />
  }
  return children
}
export default Protected
