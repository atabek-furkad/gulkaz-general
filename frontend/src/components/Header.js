import React, { useState } from "react";
import { Link } from "react-router-dom";
import { UseUserContext } from "../context/AuthContext";
import { AiFillCaretDown } from "react-icons/ai";
import "./header.css";

const Header = () => {
  const { user } = UseUserContext();
  return (
    <header>
      <Link to="/">
        <img src="/images/logo.png" width="50" alt="" />
      </Link>
      {user ? (
        <div className="container">
          <button>{user.name}</button>
          <div className="dropdown-container">
            <AiFillCaretDown className="icon" />
            <div className="show">
              <ul>
                <li>Profile</li>
                <li>products</li>
                <li>Logout</li>
              </ul>
            </div>
          </div>
        </div>
      ) : (
        <Link className="link" to={`/login`}>
          Login
        </Link>
      )}
    </header>
  );
};

export default Header;
