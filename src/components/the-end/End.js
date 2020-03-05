import React, { Component } from 'react';
import './End.css';
/* import data from "./../../data.json"; 
import { Link } from "react-router-dom";
import Homero from './../game/homero.js'; */

class End extends Component {
  /*     constructor(props) {
          super(props);
          this.state = {
  
          }; 
      } */

  render() {
    return (
      <div>
        {/*<Homero {data.userLP} {data.computerLP} /> */}
        <div id='endTextContainer'>
          <h1>Game<br />Over</h1>
          {/*           <h2>{data.winner === 'user' ? 'You won! Nice game :)' : 'The computer won. Maybe next time...'}</h2> */}
          <h2>Someone won!</h2>
        </div>
        {/*        <Link to="/Game" id="endPlayAgain"> */}
        <button id="endPlayAgainButton">
          Play again!
          </button>
        {/*         </Link> */}
      </div>
    );
  }
}

export default End;