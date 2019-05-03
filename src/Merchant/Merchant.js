import React from "react";
import { Link } from "react-router-dom";

const Merchant = props => {
  return (
    <div className="merchant-container">
      <h1>Merchant</h1>
      <Link to="/">Home</Link>
    </div>
  );
};

export default Merchant;
