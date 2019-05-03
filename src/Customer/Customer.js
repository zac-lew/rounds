import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";
import "./Customer.css";

const URL = "ws://192.168.1.12:3030";

class Customer extends Component {
  state = {};
  ws = new WebSocket(URL);
  componentDidMount() {
    this.ws.onopen = () => {
      console.log("connected");
    };
  }
  sendOrder = order => {
    this.ws.send(JSON.stringify(order));
  };
  generateButtons = () => {
    return drinks.map(drink => (
      <Button color="success" onClick={() => this.sendOrder(drink)} key={drink}>
        {drink}
      </Button>
    ));
  };
  render() {
    return (
      <div className="customer-container">
        <h1>Customer</h1>
        <div className="subtitle">Drinks List:</div>
        <div className="drinks-list">{this.generateButtons()}</div>
        <Link to="/">Home</Link>
      </div>
    );
  }
}

const drinks = ["Espresso Martini", "Margarita", "Dark & Stormy"];

export default Customer;
