import React from "react";
import { Link } from "react-router-dom";
import "../styles/error.css";

const ErrorPage = () => {
  return (
    <div className="error">
      <h1>Error Pages No Found</h1>
      <Link to="/">Back Home</Link>
    </div>
  );
};

export default ErrorPage;
