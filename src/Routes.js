import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";
import Card from "./components/Card";
import Welcome from "./components/Welcome";
import history from "./history";
import Macc from "./components/Macc";

export default class Routes extends Component {
  render() {
    return (
      <Router history={history}>
        <Switch>
          <Route path="/" exact component={Welcome} />
          <Route path="/Card" component={Card} />
          <Route path="/Macc" component={Macc} />
        </Switch>
      </Router>
    );
  }
}
