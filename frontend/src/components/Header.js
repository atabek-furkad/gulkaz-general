import React, { useState } from "react";
import { Link } from "react-router-dom";
import { UseUserContext } from "../context/AuthContext";
import { AiFillCaretDown } from "react-icons/ai";
import "./header.css";

const Header = () => {
  const { user } = UseUserContext();
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <header>
      <Link to="/">
        <img src="/images/logo.png" width="50" alt="" />
      </Link>
      {user ? (
        <div className="container">
          <button onClick={handleOpen}>{user.name}</button>
          <AiFillCaretDown className="icon" />
          {open ? (
            <div className="dropdown-container menu">
              <div className="show">
                <ul>
                  <li>Profile</li>
                  <li>products</li>
                  <li>Logout</li>
                </ul>
              </div>
            </div>
          ) : null}
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
