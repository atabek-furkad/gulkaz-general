const UserReducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN':
      localStorage.setItem('userInfo', JSON.stringify(action.payload))
      // localStorage.setItem('user', JSON.stringify(action.payload.name))
      // localStorage.setItem('token', JSON.stringify(action.payload.token))
      return {
        ...state,
        isAuthenticated: true,
        userInfo: action.payload,
        // token: action.payload.token,
      }
    case 'LOGOUT':
      localStorage.clear()
      return {
        ...state,
        isAuthenticated: false,
        userInfo: null,
      }
    default:
      return state
  }
}

export default UserReducer
