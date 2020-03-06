import React from "react";
import "./Card.css";
import Macc from "./Macc";
import NCardDetails from "./NCardDetails";
import Nhp from "./Nhp";



function Card() {
  const handleOnclick = (event) => {
    console.log(event.target, 'event')
  }
  return (
    <div className="field">
      <div className="box a">1</div>
      <div className="box b">2</div>
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
      <div className="box e">
        <img
          id="cardback"
          src="https://i.imgur.com/1tG5U8d.jpg"
          alt="cardback"
        />
      </div>
      <div className="box f">
        <img
          id="cardback"
          src="https://i.imgur.com/1tG5U8d.jpg"
          alt="cardback"
        />
      </div>
      <div className="box g">7</div>
      <div className="box h">
        <Nhp />
      </div>
      <div className="box j">
        <NCardDetails />
      </div>
      <div className="box l" onClick={handleOnclick}>
        <Macc />
      </div>
      <div className="box m">13</div>
      <div className="box n">
        <Macc />
      </div>
      <div className="box o">
        <NCardDetails />
      </div>
      {/* 
      <div class="box p">16</div> */}
      <div className="box q">17</div>
      <div className="box r">18</div>
      <div className="box s">19</div>
      <div className="box t">20</div>
      <div className="box u">21</div>
      <div className="box v">22</div>
      <div className="box w">23</div>
      <div className="box x">24</div>
      <div className="box y">25</div>
    </div>
  );
}

export default Card;
