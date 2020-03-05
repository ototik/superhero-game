import React from "react";
import "./Card.css";
import Macc from "./Macc";
import NCardDetails from "./NCardDetails";
import Nhp from "./Nhp";

function Card() {
  return (
    <div className="field">
      <div class="box a">1</div>
      <div class="box b">2</div>
      <div class="box c">
        <img
          id="cardback"
          src="https://i.imgur.com/1tG5U8d.jpg"
          alt="cardback"
        />
      </div>
      <div class="box d">
        <img
          id="cardback"
          src="https://i.imgur.com/1tG5U8d.jpg"
          alt="cardback"
        />
      </div>
      <div class="box e">
        <img
          id="cardback"
          src="https://i.imgur.com/1tG5U8d.jpg"
          alt="cardback"
        />
      </div>
      <div class="box f">
        <img
          id="cardback"
          src="https://i.imgur.com/1tG5U8d.jpg"
          alt="cardback"
        />
      </div>
      <div class="box g">7</div>
      <div class="box h">
        <Nhp />
      </div>
      <div class="box j">
        <NCardDetails />
      </div>
      <div class="box l">
        <Macc />
      </div>
      <div class="box m">13</div>
      <div class="box n">
        <Macc />
      </div>
      <div class="box o">
        <NCardDetails />
      </div>
      {/* 
      <div class="box p">16</div> */}
      <div class="box q">17</div>
      <div class="box r">18</div>
      <div class="box s">19</div>
      <div class="box t">20</div>
      <div class="box u">21</div>
      <div class="box v">22</div>
      <div class="box w">23</div>
      <div class="box x">24</div>
      <div class="box y">25</div>
    </div>
  );
}

export default Card;
