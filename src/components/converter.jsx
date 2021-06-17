import React, { Component } from "react";
import { Form, Card, InputGroup, Jumbotron } from "react-bootstrap";
import "../styles/index.css";

class Converter extends Component {
  state = { input: "", result: "NaN", base1: "", base2: "" };

  convert = (x, y, z) => {
    try {
      //let inputInt = parseInt(x);
      let base1Int = parseInt(y);
      let base2Int = parseInt(z);
      let inputStr = x;
      let tempResult = parseInt(inputStr, base1Int);
      let resultStr = tempResult.toString(base2Int);
      this.setState({ result: resultStr });
    } catch (err) {
      this.setState({ result: "NaN" });
    }
  };

  render() {
    let outputStr;
    if (this.state.result === "NaN") {
      outputStr = <p>Fill in all the blanks above and provide proper values</p>;
    } else {
      outputStr = (
        <h1>
          <span>
            {this.state.input}
            <sub>{this.state.base1}</sub>=
            <strong>
              {this.state.result}
              <sub>{this.state.base2}</sub>
            </strong>
          </span>
        </h1>
      );
    }

    return (
      <div>
        <Jumbotron>
          <h1>Convert</h1>
          <p>A simple and easy-to-use base converter!</p>
        </Jumbotron>
        <InputGroup>
          <InputGroup.Prepend>
            <InputGroup.Text>Convert</InputGroup.Text>
          </InputGroup.Prepend>
          <Form.Control
            placeholder="Enter value"
            value={this.state.input}
            onChange={(e) => {
              e.preventDefault();
              this.setState({ input: e.target.value.toUpperCase() });
              this.convert(e.target.value, this.state.base1, this.state.base2);
            }}
          />
          <InputGroup.Append>
            <InputGroup.Text>from base</InputGroup.Text>
          </InputGroup.Append>
          <Form.Control
            placeholder="Enter first base value"
            value={this.state.base}
            onChange={(e) => {
              e.preventDefault();
              this.setState({ base1: e.target.value });
              this.convert(this.state.input, e.target.value, this.state.base2);
            }}
          ></Form.Control>
          <InputGroup.Append>
            <InputGroup.Text>to base</InputGroup.Text>
          </InputGroup.Append>
          <Form.Control
            placeholder="Enter second base value"
            value={this.state.base}
            onChange={(e) => {
              e.preventDefault();
              this.setState({ base2: e.target.value });
              this.convert(this.state.input, this.state.base1, e.target.value);
            }}
          ></Form.Control>
        </InputGroup>
        <div className="margin-style">{outputStr}</div>
      </div>
    );
  }
}

export default Converter;
