const initialUserState = {
  isAuthenticated: false,
  userInfo: null || JSON.parse(localStorage.getItem('userInfo')),
}

export default initialUserState
