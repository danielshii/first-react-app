import React, { Component } from "react";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import { Popover } from "react-bootstrap";

class CustomButton extends Component {
  render() {
    return (
      <OverlayTrigger
        placement="right"
        delay={{ show: 500, hide: 200 }}
        overlay={<Popover>{this.props.hover}</Popover>}
      >
        <button
          className="btn btn-outline-primary m-2"
          onClick={this.props.action}
          disabled={this.props.isDisabled}
        >
          {this.props.text}
        </button>
      </OverlayTrigger>
    );
  }
}

export default CustomButton;
