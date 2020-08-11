import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Home from "./components/mainPage";
import NavBar from "./components/navBar";
import Show from "./components/show";
import ShowData from "./components/showData";

import Checkout from "./components/checkout";
class App extends Component {
  state = {};
  render() {
    return (
      <div className="container-fluid " style={{ backgroundColor: "silver" }}>
        <Switch>
          <Route exact path="/home/checkout" component={Checkout} />
          <Route exact path="/home/:catg/:brand/:id" component={Show} />
          <Route exact path="/home/:catg/:brand?" component={ShowData} />

          <Route path="/home" component={Home} />
          <Redirect to="/home" />
        </Switch>
      </div>
    );
  }
}

export default App;
