import React, { Component } from "react";
import "./End.css";
import data from "./data.json";
import { Link } from "react-router-dom";
import Nhp from "./Nhp";

class End extends Component {
  /*     constructor(props) {
          super(props);
          this.state = {
  
          }; 
      } */

  componentDidMount() {
    this.playAgainButton.focus();
  }

  render() {
    return (
      <div>
        <Nhp />
        <div id="endTextContainer">
          <h1>
            Game
            <br />
            Over
          </h1>
          <h2>
            {data.winner === "user"
              ? "You won! Nice game :)"
              : "The computer won. Maybe next time..."}
          </h2>
        </div>
        <Link to="/Game" id="endPlayAgain">
          <button
            id="endPlayAgainButton"
            ref={playAgainButton => {
              this.playAgainButton = playAgainButton;
            }}
          >
            Play again!
          </button>
        </Link>
      </div>
    );
  }
}

export default End;
