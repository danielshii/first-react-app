import React, { Component } from "react";
import { Form, InputGroup, Jumbotron } from "react-bootstrap";
import "../styles/index.css";

class IEEEConverter extends Component {
  state = {
    input: "",
    result: "",
    hasFormattingError: true,
    isHexFormat: false,
  };

  handleSwitchChange = () => {
    this.setState({ isHexFormat: !this.state.isHexFormat });
    if (this.state.input !== "" && !this.state.hasFormattingError) {
      if (!this.state.isHexFormat) {
        this.setState({
          input: parseInt(this.state.input, 2).toString(16).toUpperCase(),
        });
      } else {
        this.setState({
          input: parseInt(this.state.input.toString(), 16).toString(2),
        });
      }
    } else {
      this.setState({ input: "" });
    }
  };

  convert = (inputString) => {
    try {
      //convert to binary if input is in hex notation
      if (this.state.isHexFormat) {
        inputString = parseInt(inputString.toString(), 16).toString(2);
      }

      let ans = 0;

      if (inputString.length == 0) {
        this.setState({ result: "", hasFormattingError: true });
        return;
      }

      if (inputString.length > 32) {
        this.setState({ result: "", hasFormattingError: true });
        return;
      }

      //append 0s to the front if needed
      if (inputString.length < 32) {
        let iterations = 32 - inputString.length;
        for (let i = 0; i < iterations; i++) {
          inputString = "0" + inputString;
        }
      }

      //handling sign bit
      let bit = parseInt(inputString[0].toString());
      if (bit != 0 && bit != 1) {
        this.setState({ result: "", hasFormattingError: true });
        return;
      }
      let neg = 1;
      if (bit == 1) {
        neg = -1;
      }

      //handling exponent
      let exponent = 0;
      for (let index = 1; index <= 8; index++) {
        bit = parseInt(inputString[index].toString());
        if (bit != 0 && bit != 1) {
          this.setState({ result: "", hasFormattingError: true });
          return;
        }
        exponent += parseInt(bit) * Math.pow(2, 8 - index);
      }

      //handling decimal
      let fraction = 0;
      for (let index = 9; index < inputString.length; index++) {
        bit = parseInt(inputString[index].toString());
        if (bit != 0 && bit != 1) {
          this.setState({ result: "", hasFormattingError: true });
          return;
        }
        fraction += parseInt(bit) * Math.pow(2, -(index - 8));
      }

      ans = neg * (1 + fraction) * Math.pow(2, exponent - 127);
      this.setState({ result: ans.toString(), hasFormattingError: false });
    } catch (err) {
      this.setState({ result: "", hasFormattingError: true });
    }
  };

  render() {
    var error;
    if (this.state.isHexFormat) {
      error = "Please enter a proper hexadecimal value";
    } else {
      error = "Please enter a proper binary value";
    }

    var placeHolder;
    if (this.state.isHexFormat) {
      placeHolder = "Enter a hexadecimal value";
    } else {
      placeHolder = "Enter a binary value";
    }

    var output;
    if (this.state.hasFormattingError) {
      output = null;
    } else {
      output = (
        <h1>
          Decimal value = <strong>{this.state.result}</strong>
        </h1>
      );
    }

    return (
      <div>
        <Jumbotron>
          <h1>IEEE-754 Converter</h1>
          <p>Instantly convert a 32-bit IEEE-754 value into a decimal!</p>
          <small>
            When the switch is on "hex", the program will convert from a
            hexadecimal input
          </small>
          <br></br>
          <small>Otherwise, it will convert from a binary input</small>
          <br></br>
          <small>
            Note: there will be some cases where the IEEE equivalent is the same
            for both hex and binary inputs
          </small>
        </Jumbotron>
        <div className="margin-style">
          <p1>IEEE Value:</p1>
          <p1>
            <InputGroup>
              <Form.Control
                placeholder={placeHolder}
                value={this.state.input}
                onChange={(e) => {
                  e.preventDefault();
                  this.setState({ input: e.target.value.toUpperCase() });
                  this.convert(e.target.value);
                }}
                isInvalid={this.state.hasFormattingError}
              />
              <Form.Control.Feedback tooltip type="invalid">
                {error}
              </Form.Control.Feedback>
            </InputGroup>
            <Form.Switch
              className="increased-padding"
              id="switch"
              onChange={(e) => {
                e.preventDefault();
                this.handleSwitchChange();
                this.convert(this.state.input);
              }}
              checked={this.state.isHexFormat}
              label="Convert from Hex"
            />
          </p1>
          {output}
        </div>
      </div>
    );
  }
}

export default IEEEConverter;
