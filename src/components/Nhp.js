import React from "react";
import "./Nhp.css";
import data from "./data";

class Nhp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hp1: data.hp1,
      hp2: data.hp2
    };
  }

  setHp() {
    this.setState({ hp1: data.hp1, hp2: data.hp2 });
  }

  render() {
    return (
      <div className="container">
        <h3>HEALTH POINTS</h3>
        <div className="players">
          <div className="player1">
            <p>{data.name1}</p>
            <p>{data.hp1}</p>
            <div className="meter">
              <span id="meter1" style={{ width: this.state.hp1 + "%" }}></span>
            </div>
          </div>
          <div className="player2">
            <p>{data.name2}</p>
            <p>{data.hp2}</p>
            <div className="meter">
              <span id="meter2" style={{ width: this.state.hp2 + "%" }}></span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Nhp;