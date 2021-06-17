import React, { Component } from "react";
import Homepage from "./components/homepage";
//import About from "./components/about";
//import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//import Calculator from "./components/calculator";

class App extends Component {
  render() {
    return (
      // <Router>
      //   <div>
      //     <h1>
      //       <Switch>
      //         <Route path="/" exact component={Homepage} />
      //         <Route path="/calculator" component={Calculator} />
      //         <Route path="/about" component={About} />
      //       </Switch>
      //     </h1>
      //   </div>
      // </Router>
      <Homepage />
    );
  }
}

export default App;
