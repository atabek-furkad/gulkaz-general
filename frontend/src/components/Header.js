import { Link } from "react-router-dom";
import React, { useContext } from "react";
import UserContext from "../context/UserContext";
import "../styles/header.css";

const Header = () => {
  const { state, dispatch } = useContext(UserContext);
  console.log("header", state);
  // const { dispatch } = useContext(UserContext);

  const handleLogout = () => {
    localStorage.clear();
    dispatch({
      type: "LOGOUT",
    });
  };

  // useEffect(() => {}, [state])
  return (
    <header>
      <Link to="/">
        <img src="/images/logo.png" width="50" alt="" />
      </Link>

      <Link to="/products" style={{ textDecoration: "none" }}>
        Products
      </Link>

      {state?.userInfo ? (
        <Link onClick={handleLogout} className="link" to={`/`}>
          Logout
        </Link>
      ) : (
        <Link className="link" to={`/login`}>
          Login
        </Link>
      )}
    </header>
  );
};

export default Header;
