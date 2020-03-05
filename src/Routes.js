import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";
import history from "./history";
import Welcome from "./components/Welcome";
import Macc from "./components/Macc";
import End from "./components/the-end/End";


export default class Routes extends Component {
  render() {
    return (
      <Router history={history}>
        <Switch>
          <Route path="/" exact component={Welcome} />
          <Route path="/Game" exact component={Game} />
          <Route path="/Macc" component={Macc} />
          <Route path="/End" exact component={End} />
        </Switch>
      </Router>
    );
  }
}
