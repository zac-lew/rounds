import React, { Component } from "react";
import { Link } from "react-router-dom";

const URL = "ws://192.168.1.12:3030";

class Merchant extends Component {
  state = {
    orders: []
  };
  ws = new WebSocket(URL);
  componentDidMount() {
    this.ws.onopen = () => {
      console.log("connected");
    };
    this.ws.onmessage = evt => {
      const order = JSON.parse(evt.data);
      this.addOrder(order);
    };
  }
  addOrder = order => {
    this.setState({ orders: [...this.state.orders, order] });
  };
  generateOrders = () => {
    return this.state.orders.map((order, i) => <h2 key={i}>{order}</h2>);
  };
  render() {
    return (
      <div className="merchant-container">
        <h1>Merchant</h1>
        <h1>Current Orders:</h1>
        {this.generateOrders()}
        <Link to="/">Home</Link>
      </div>
    );
  }
}

export default Merchant;
