import React from "react";
import "./App.css";
import Home from "./Home/Home";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Merchant from "./Merchant/Merchant";
import Customer from "./Customer/Customer";

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={Home} />
        <Route exact path="/customer" component={Customer} />
        <Route exact path="/merchant" component={Merchant} />
      </Router>
    </div>
  );
}

export default App;
