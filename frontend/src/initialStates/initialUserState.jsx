const initialUserState = {
  isAuthenticated: false,
  userInfo: null || localStorage.getItem("userInfo"),
};

export default initialUserState;
