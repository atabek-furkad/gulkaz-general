const UserReducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      return {
        ...state,
        isAuthenticated: true,
        userInfo: action.payload,
        error: null,
      }
    case 'LOGIN_FAIL':
      return {
        ...state,
        isAuthenticated: false,
        userInfo: {},
        error: action.payload,
      }
    case 'LOGOUT':
      return {
        ...state,
        isAuthenticated: false,
        userInfo: null,
        error: null,
      }
    default:
      return state
  }
}

export default UserReducer
