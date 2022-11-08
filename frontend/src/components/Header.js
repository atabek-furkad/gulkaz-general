import React from "react";
import { Link } from "react-router-dom";
import { UseUserContext } from "../context/AuthContext";

const Header = () => {
  const { user } = UseUserContext();
  return (
    <header>
      <Link to="/">
        <img src="/images/logo.png" width="50" alt="" />
      </Link>
      {user ? (
        user.name
      ) : (
        <Link className="link" to={`/login`}>
          Login
        </Link>
      )}
    </header>
  );
};

export default Header;
