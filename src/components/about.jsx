import React, { Component } from "react";
import "../styles/index.css";

class About extends Component {
  state = {};
  render() {
    return (
      <div className="about">
        <h1>About</h1>
        <p>
          Some useful tools for helping Computer Science students get through
          their studies
        </p>
        <p>Happy computing!</p>
        <small>
          <p>
            Follow the creator of this site on{" "}
            <a href="https://instagram.com/daniel.shii" target="_blank">
              Instagram
            </a>
          </p>
          <p>
            <i>More tools coming soon...</i>
          </p>
        </small>
      </div>
    );
  }
}

export default About;
