import React from "react";
import data from "./data";
import "./NCardDetails.css";

class NCardDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: data.id,
      name: data.name,
      intelligence: data.intelligence,
      strength: data.strength,
      speed: data.speed,
      durability: data.durability,
      power: data.power,
      combat: data.combat
    };
  }

  render() {
    return (
      <div className="card">
        <div>
          <label>#ID: </label>
          <p>{this.state.id}</p>
          <hr />
          <label>NAME:</label>
          <p> {this.state.name}</p>
          <hr />
          <label>INTELLIGENCE: </label>
          <p>{this.state.intelligence}</p>
          <hr />
          <label>STRENGTH: </label>
          <p>{this.state.strength} </p>
          <hr />
          <label>SPEED:</label>
          <p> {this.state.speed} </p>
          <hr />
          <label>DURABILITY: </label>
          <p>{this.state.durability} </p>
          <hr />
          <label>POWER:</label>
          <p> {this.state.power}</p>
          <hr />
          <label>COMBAT: </label>
          <p>{this.state.combat}</p>
        </div>
      </div>
    );
  }
}

export default NCardDetails;
