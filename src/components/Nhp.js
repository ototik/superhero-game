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
        <div className="players">
          <div className="player1">
            <p>
              {" "}
              <span style={{ fontWeight: "bold" }}> {data.name1} </span>/{" "}
              {data.hp1} HP
            </p>

            <div className="meter">
              <span id="meter1" style={{ width: this.state.hp1 + "%" }}></span>
            </div>
          </div>
          <div className="player2">
            <p>
              <span style={{ fontWeight: "bold" }}> {data.name2}</span> /{" "}
              {data.hp2} HP
            </p>

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
