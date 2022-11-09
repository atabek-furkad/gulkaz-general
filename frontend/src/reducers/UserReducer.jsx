const UserReducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN_START':
      return {
        ...state,
        isAuthenticated: false,
        userInfo: null,
        error: null,
        loading: true,
      }
    case 'LOGIN_SUCCESS':
      return {
        ...state,
        isAuthenticated: true,
        userInfo: action.payload,
        error: null,
        loading: false,
      }
    case 'LOGIN_FAIL':
      return {
        ...state,
        isAuthenticated: false,
        userInfo: null,
        error: action.payload,
        loading: false,
      }
    case 'LOGOUT':
      return {
        ...state,
        isAuthenticated: false,
        userInfo: null,
        error: null,
        loading: false,
      }
    default:
      return state
  }
}

export default UserReducer
