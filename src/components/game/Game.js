import React, { Component } from 'react';
import './Game.css';
import { Link } from "react-router-dom";

class Game extends Component {
  /*     constructor(props) {
          super(props);
          this.state = {
  
          }; 
      } */


  render() {
    return (
      <div className="container">
        <div class="box 1">1</div>
        <div class="box 2">2</div>
        <div class="box 3">3</div>
        <div class="box 4">4</div>
        <div class="box 5">5</div>
        <div class="box 6">6</div>
        <div class="box 7">7</div>
        <div class="box 8">8</div>
        <div class="box 9">9</div>
        <div class="box 10">10</div>
        <div class="box 11">11</div>
        <div class="box 12">12</div>
        <div class="box 13">13</div>
        <div class="box 14">14</div>
        <div class="box 15">15</div>
        <div class="box 16">16</div>
        <div class="box 17">17</div>
        <div class="box 18">18</div>
        <div class="box 19">19</div>
        <div class="box 20">20</div>
        <div class="box 21">
          <Link to="/End">
            <button>
              to the end
          </button>
          </Link>
        </div>
      </div>
    );
  }
}

export default Game;