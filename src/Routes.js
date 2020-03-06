import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";
import history from "./history";
import Welcome from "./components/Welcome";
import End from "./components/End";
import Card from "./components/Card";

export default class Routes extends Component {
  render() {
    return (
      <Router history={history}>
        <Switch>
          <Route path="/" exact component={Welcome} />
          <Route path="/Card" exact component={Card} />
          <Route path="/End" exact component={End} />
        </Switch>
      </Router>
    );
  }
}
