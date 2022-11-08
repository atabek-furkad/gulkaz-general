const InitialState = {
  loading: false,
  error: null,
  user: JSON.parse(localStorage.getItem("userInfo")) || null,
  // openDropDown: false,
};

export default InitialState;
