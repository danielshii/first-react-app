import React, { Component } from "react";
import Counter from "./counter";
//import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import Button from "./button";
import {
  InputGroup,
  Dropdown,
  DropdownButton,
  Form,
  Jumbotron,
} from "react-bootstrap";
import "../styles/index.css";

const operations = ["+", "-", "*", "÷"];

class Calculator extends Component {
  state = { operand1: "0", operand2: "0", operation: "+", answer: "0" };
  render() {
    return (
      <div>
        <Jumbotron>
          <h1>Calculator</h1>
        </Jumbotron>
        <h1 className="margin-style">
          <Form.Control
            placeholder="Enter the first operand"
            value={this.state.operand1}
            onChange={(e) => this.setState({ operand1: e.target.value })}
          />
          <DropdownButton
            title={this.state.operation}
            onSelect={(e) => this.setState({ operation: e })}
          >
            {operations.map((operation) => (
              <Dropdown.Item key={operation} eventKey={operation}>
                {operation}
              </Dropdown.Item>
            ))}
          </DropdownButton>
          <InputGroup hasValidation>
            <Form.Control
              placeholder="Enter the second operand"
              value={this.state.operand2}
              onChange={(e) => {
                e.preventDefault();
                this.setState({ operand2: e.target.value });
              }}
              isInvalid={this.hasDivisionError()}
            />
            <Form.Control.Feedback tooltip type="invalid">
              Please enter a nonzero value
            </Form.Control.Feedback>
          </InputGroup>

          <Button
            text="Calculate"
            hover="Calculate the value of the expression"
            action={() =>
              this.calculate(
                this.state.operand1,
                this.state.operand2,
                this.state.operation
              )
            }
            isDisabled={this.hasDivisionError()}
          />
          <h1>Result = {this.state.answer}</h1>
        </h1>
      </div>
    );
  }

  hasDivisionError() {
    return this.state.operation === operations[3] && this.state.operand2 == 0;
  }

  calculate = (operand1, operand2, operator) => {
    let result = 0;
    operand1 = parseInt(operand1);
    operand2 = parseInt(operand2);
    switch (operator) {
      case operations[0]:
        result = operand1 + operand2;
        break;
      case operations[1]:
        result = operand1 - operand2;
        break;
      case operations[2]:
        result = operand1 * operand2;
        break;
      case operations[3]:
        if (operand2 != 0) {
          result = operand1 / operand2;
        } else {
          result = 0;
        }
      default:
        break;
    }
    this.setState({ answer: result.toString() });
  };
}

export default Calculator;
