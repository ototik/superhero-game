import React from "react";
import "./Card.css";
import Macc from "./Macc"; /* 
import Nhp from "./Nhp"; */
import Cards from "./Cards";
import card1data from "./card1data";
import data from "./data";

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false
    };
    this.handleOnClick = this.handleOnClick.bind(this);
  }
  handleOnClick = () => {
    this.setState({
      clicked: !this.state.clicked
    });
    setTimeout(() => window.location.reload(), 3000);
  };

  render() {
    return (
      <div className="field">
        <div className="box a">
          {" "}
          <img
            id="cardback"
            src="https://i.imgur.com/1tG5U8d.jpg"
            alt="cardback"
          />
        </div>
        <div className="box b">
          {" "}
          <img
            id="cardback"
            src="https://i.imgur.com/1tG5U8d.jpg"
            alt="cardback"
          />
        </div>
        <div className="box c">
          <img
            id="cardback"
            src="https://i.imgur.com/1tG5U8d.jpg"
            alt="cardback"
          />
        </div>
        <div className="box d">
          <img
            id="cardback"
            src="https://i.imgur.com/1tG5U8d.jpg"
            alt="cardback"
          />
        </div>
        <div className="box e"></div>
        <div className="box f"></div>
        <div className="box g"></div>
        <div className="box h"></div>
        <div className="box i"></div>
        {/*  <div className="box j"></div> */}
        <div className="box l">
          <Macc />
        </div>
        <div className="box m">
          {this.state.clicked === false ? (
            <button id="next-round" onClick={this.handleOnClick}>
              Fight!
            </button>
          ) : card1data.AP > data.AP ? (
            <div>
              <p className="winnerText">{card1data.name} won!</p>
            </div>
          ) : (
            <p className="winnerText">{data.name} won!</p>
          )}
        </div>
        <div className="box n">
          <Cards />
        </div>
        {/* <div className="box o"></div> */}
        {/* 
      <div class="box p">16</div> */}
        <div className="box q"></div>
        <div className="box r"></div>
        <div className="box s"></div>
        <div className="box t"></div>
        <div className="box u"></div>
        <div className="box v">
          {" "}
          <img
            id="cardback"
            src="https://i.imgur.com/1tG5U8d.jpg"
            alt="cardback"
          />
        </div>
        <div className="box w">
          {" "}
          <img
            id="cardback"
            src="https://i.imgur.com/1tG5U8d.jpg"
            alt="cardback"
          />
        </div>
        <div className="box x">
          {" "}
          <img
            id="cardback"
            src="https://i.imgur.com/1tG5U8d.jpg"
            alt="cardback"
          />
        </div>
        <div className="box y">
          {" "}
          <img
            id="cardback"
            src="https://i.imgur.com/1tG5U8d.jpg"
            alt="cardback"
          />
        </div>
      </div>
    );
  }
}
export default Card;
