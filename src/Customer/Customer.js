import React from "react";
import { Link } from "react-router-dom";

const Customer = props => {
  return (
    <div className="customer-container">
      <h1>Customer</h1>
      <Link to="/">Home</Link>
    </div>
  );
};

export default Customer;
