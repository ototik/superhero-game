import React from "react";
import "./Card.css";
import Macc from "./Macc";
import NCardDetails from "./NCardDetails";
import Nhp from "./Nhp";
import data from "./data";

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      /*       computerImage: data.computerChose.image,
      computerName: data.computerChose.name,
      computerDurability: data.computerChose.durability,
      computerPower: data.computerChose.power,
      userImage: data.userChose.image,
      userName: data.userChose.name,
      userDurability: data.userChose.durability,
      userPower: data.userChose.power */
    };
  }

  render() {
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
          {/* <div>
            <img
              id="pics"
              alt="NoPictureInApi"
              src={data.computerChose.image}
            ></img>
            <p id="character_name">
              {data.computerChose.name["full-name"]
                ? data.computerChose.name["full-name"]
                : "Sorry NoName InTheApi"}
            </p>
            <p>Durability: {data.computerChose.durability}</p>
            <p>Attack Power: {data.computerChose.power}</p>
          </div> */}
        </div>
        <div class="box m">13</div>
        <div class="box n">
          <div>
            <img
              id="pics"
              alt="NoPictureInApi"
              src={data.userChose.image}
            ></img>
            <p id="character_name">
              {data.userChose.name
                ? data.userChose.name
                : "Sorry NoName InTheApi"}
            </p>
            <p>Durability: {data.userChose.durability}</p>
            <p>Attack Power: {data.userChose.power}</p>
          </div>
        </div>
        <div class="box o">
          <NCardDetails />
        </div>
        {/* 
      <div class="box p">16</div> */}
        <div class="box q">17</div>
        <div class="box r">18</div>
        <div class="box s">19</div>
        <div class="box t">
          <Macc />
        </div>
        <div class="box u">
          <Macc />
        </div>
        <div class="box v">
          <Macc />
        </div>
        <div class="box w">
          <Macc />
        </div>
        <div class="box x">24</div>
        <div class="box y">25</div>
      </div>
    );
  }
}

export default Card;
