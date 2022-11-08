const checkUserCredentials = async (email, password) => {
  const config = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  }
  try {
    const response = await fetch('/api/users/login', config)
    if (!response.ok) {
      throw new Error(response.statusText)
    }
    const data = await response.json()
    localStorage.setItem('userInfo', JSON.stringify(data))
  } catch (error) {
    console.log(error.message)
  }
}

export default checkUserCredentials
