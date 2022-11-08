<<<<<<< HEAD
import React, { useState } from 'react'
import checkUserCredentials from '../utils/fetchUserData'
=======
import React, { useState } from "react";
import fetchUserData from "../utils/fetchUserData";
import { UseUserContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
>>>>>>> f79b3f34dbe70349c0a3faa4b8069337c4e88354

const LoginPage = () => {
  // const [user, setUser] = useState({})
  const navigate = useNavigate();
  const { dispatch } = UseUserContext();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const isFormFilled = Boolean(email) && Boolean(password);

<<<<<<< HEAD
  const submitForm = (e) => {
    e.preventDefault()
    checkUserCredentials(email, password)
  }
=======
  const submitForm = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const user = await fetchUserData(email, password);
      dispatch({
        type: "LOGIN_SUCCESS",
        payload: user,
      });
      navigate("/");
    } catch (error) {
      dispatch({ type: "LOGIN_ERROR", payload: error });
    }
  };
>>>>>>> f79b3f34dbe70349c0a3faa4b8069337c4e88354

  return (
    <div className="LoginPage">
      <h1>Login Page</h1>
      <form onSubmit={submitForm}>
        <div className="input-container">
          <label htmlFor="email">Email</label>
          <input
            autoFocus
            type="email"
            id="email"
            value={email}
            name="email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="input-container">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            value={password}
            id="password"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button disabled={!isFormFilled} type="submit">
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
