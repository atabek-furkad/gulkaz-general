import axios from 'axios'
const fetchUserData = async (email, password) => {
  const { data } = await axios.post(
    '/api/users/login',
    { email, password },
    {
      headers: {
        'Content-Type': 'application/json',
      },
    },
  )

  console.log('data', data)

  localStorage.setItem('userInfo', JSON.stringify(data))
}

export default fetchUserData
