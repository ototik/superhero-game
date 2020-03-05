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
          <p>
            <span style={{ fontWeight: "bold" }}>#ID:</span> {this.state.id}
          </p>
          <hr />
          <p>
            <span style={{ fontWeight: "bold" }}>NAME:</span> {this.state.name}
          </p>
          <hr />
          <p>
            {" "}
            <span style={{ fontWeight: "bold" }}>INTELLIGENCE:</span>{" "}
            {this.state.intelligence}
          </p>
          <hr />
          <p>
            <span style={{ fontWeight: "bold" }}>STRENGTH:</span>{" "}
            {this.state.strength}
          </p>
          <hr />
          <p>
            {" "}
            <span style={{ fontWeight: "bold" }}>SPEED:</span>
            {this.state.speed}
          </p>
          <hr />
          <p>
            <span style={{ fontWeight: "bold" }}>DURABILITY:</span>{" "}
            {this.state.durability}
          </p>
          <hr />
          <p>
            {" "}
            <span style={{ fontWeight: "bold" }}>POWER:</span>
            {this.state.power}
          </p>
          <hr />
          <p>
            {" "}
            <span style={{ fontWeight: "bold" }}>COMBAT:</span>
            {this.state.combat}{" "}
          </p>
        </div>
      </div>
    );
  }
}

export default NCardDetails;
