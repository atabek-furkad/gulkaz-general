import React from "react";
import { useNavigate } from "react-router-dom";

const Error = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1>No Such Product Found</h1>
      <button onClick={() => navigate(-1)}>Go Back</button>
    </div>
  );
};

export default Error;
