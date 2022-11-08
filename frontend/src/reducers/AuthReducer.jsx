const AuthReducer = (state, action) => {
  if (action.type === "LOGIN_START") {
    return { ...state, user: null, error: null };
  }

  if (action.type === "LOGIN_SUCCESS") {
    return { ...state, user: action.payload };
  }

  if (action.type === "LOGIN_FAILURE") {
    return { ...state, user: null };
  }
};

export default AuthReducer;
