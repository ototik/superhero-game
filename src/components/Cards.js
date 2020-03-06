import React from "react";
import "./cards.css";
import card1data from "./card1data";

const json1 = card1data;
class Cards extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      apidata: "",
      image: "",
      powerstats: "",
      biography: "",
      attackPower: "",
      name: "",
      intelligence: "",
      strength: "",
      speed: "",
      durability: "",
      power: "",
      combat: "",
      randomInt: Math.floor(Math.random() * Math.floor(731))
    };
    this.calcAP = this.calcAP.bind(this);
  }

  componentDidMount() {
    fetch(
      `https://www.superheroapi.com/api.php/4230529273639827/${this.state.randomInt}`
    )
      .then(res => res.json())
      .then(data => {
        this.setState({
          apidata: data,
          image: data.image,
          biography: data.biography,
          powerstats: data.powerstats,
          name: data.biography["full-name"],
          intelligence: data.powerstats.intelligence,
          strength: data.powerstats.strength,
          speed: data.powerstats.speed,
          durability: data.powerstats.durability,
          power: data.powerstats.power,
          combat: data.powerstats.combat
        });
        this.calcAP();
        json1.name = data.biography["full-name"];
        json1.intelligence = data.powerstats.intelligence;
        json1.strength = data.powerstats.strength;
        json1.speed = data.powerstats.speed;
        json1.durability = data.powerstats.durability;
        json1.power = data.powerstats.power;
        json1.combat = data.powerstats.combat;
        json1.image = data.image.url;
        json1.AP = this.state.AP;
        console.log(json1.name, "json1");
      });
  }

  calcAP() {
    let stats = Object.values(this.state.powerstats);
    let sum = 0;
    stats.map(element => {
      return (sum = Math.floor((sum += parseInt(element))));
    });
    this.setState({ AP: Math.floor(sum / stats.length) });
  }

  render() {
    let { image, biography, AP } = this.state;
    console.log();
    return (
      <React.Fragment className="cardcontainer">
        <div className="img2">
          <img id="pics" alt="NoPictureInApi" src={image.url} />
          <p id="character_name">
            {biography["full-name"]
              ? biography["full-name"]
              : "Sorry NoName InTheApi"}
          </p>
          <p>Attack Power: {AP}</p>
        </div>
        <div className="card2">
          <div>
            <p id="card-details">
              <span style={{ fontWeight: "bold" }}>#ID:</span>{" "}
              {this.state.randomInt}
            </p>
            <hr />
            <p id="card-details">
              <span style={{ fontWeight: "bold" }}>NAME:</span>{" "}
              {this.state.name}
            </p>
            <hr />
            <p id="card-details">
              {" "}
              <span style={{ fontWeight: "bold" }}>INTELLIGENCE:</span>{" "}
              {this.state.intelligence}
            </p>
            <hr />
            <p id="card-details">
              <span style={{ fontWeight: "bold" }}>STRENGTH:</span>{" "}
              {this.state.strength}
            </p>
            <hr />
            <p id="card-details">
              {" "}
              <span style={{ fontWeight: "bold" }}>SPEED:</span>{" "}
              {this.state.speed}
            </p>
            <hr />
            <p id="card-details">
              <span style={{ fontWeight: "bold" }}>DURABILITY:</span>{" "}
              {this.state.durability}
            </p>
            <hr />
            <p id="card-details">
              {" "}
              <span style={{ fontWeight: "bold" }}>POWER:</span>{" "}
              {this.state.power}
            </p>
            <hr />
            <p id="card-details">
              {" "}
              <span style={{ fontWeight: "bold" }}>COMBAT:</span>{" "}
              {this.state.combat}{" "}
            </p>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Cards;
