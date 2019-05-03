import React from "react";
import { Link } from "react-router-dom";

const Home = props => {
  return (
    <div className="home-container">
      <h1>Home</h1>
      <Link to={"/merchant"}>Merchant</Link>
      <Link to={"/customer"}>Customer</Link>
    </div>
  );
};

export default Home;
