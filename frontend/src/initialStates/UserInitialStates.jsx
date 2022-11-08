const InitialState = {
  loading: false,
  error: false,
  user: JSON.parse(localStorage.getItem("userInfo")) || null,
};

export default InitialState;
