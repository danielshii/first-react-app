import React, { Component } from "react";
import CustomButton from "./button";
//import Dropdown from "react-dropdown";
import "react-dropdown/style.css";

class Counter extends Component {
  state = {
    count: 1,
  };

  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 });
  };

  handleRandomNum = () => {
    this.setState({ count: Math.floor(Math.random() * 100) + 1 });
  };

  handleCalculate = () => {
    console.log("calculate");
  };

  render() {
    return (
      <div>
        <h1 className="badge badge-dark badge-pill">{this.state.count}</h1>
        <CustomButton text="Increment" action={() => this.handleIncrement()} />
        <CustomButton
          text="Generate Random Number [1-100]"
          action={() => this.handleRandomNum()}
        />
      </div>
    );
  }
}

export default Counter;
