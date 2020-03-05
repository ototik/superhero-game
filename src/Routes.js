import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";
import history from "./history";
import Welcome from "./components/Welcome";
import Game from "./components/game/Game";
import End from "./components/the-end/End";


class Routes extends Component {
  render() {
    return (
      <Router history={history}>
        <Switch>
          <Route path="/" exact component={Welcome} />
          <Route path="/Game" exact component={Game} />
          <Route path="/End" exact component={End} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;