import React, { Component } from "react";
import { Tabs, Tab, Jumbotron } from "react-bootstrap";
import Calculator from "./calculator";
import About from "./about";
import Converter from "./converter";
//import Button from "./button";
//import { useHistory } from "react-router-dom";
import IEEEConverter from "./ieeeConverter";
import Footer from "./footer";
//import { Tooltip } from "bootstrap";
import "../styles/index.css";

function Homepage() {
  //let history = useHistory();

  // return (
  //   <div>
  //     <Button text="Calculator" action={() => history.push("/calculator")} />
  //     <Button text="About" action={() => history.push("/about")} />
  //   </div>
  // );

  return (
    <div>
      <Tabs defaultActiveKey="Converter" id="tabs">
        <Tab eventKey="Converter" title="Base Converter">
          <Converter />
        </Tab>
        <Tab eventKey="Calculator" title="Calculator">
          <Calculator />
        </Tab>
        <Tab eventKey="ieeeConverter" title="IEEE-754 Converter">
          <IEEEConverter />
        </Tab>
        <Tab eventKey="about" title="About">
          <About />
        </Tab>
      </Tabs>
      <Footer />
    </div>
  );
}

export default Homepage;
