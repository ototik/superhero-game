import React from "react";
import "./cards.css";

class Cards extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      apidata: "",
      image: "",
      powerstats: "",
      biography: "",
      attackPower: "",
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
          powerstats: data.powerstats
        });
        this.calcAP();
        console.log();
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
    let { image, powerstats, biography, AP } = this.state;
    console.log();
    return (
      <div>
        <div className="cardcontainer">
          <img id="pics" alt="Harry Potter" src={image.url} />
          <p id="character-name">{biography["full-name"]}</p>
          <p>Intelligence {powerstats.intelligence}</p>
          <p>Strength {powerstats.strength}</p>
          <p>Speed {powerstats.speed}</p>
          <p>Durability {powerstats.durability}</p>
          <p>Power {powerstats.power}</p>
          <p>Combat {powerstats.combat}</p>
          <p>Attack Power {AP}</p>
          <p>Health Points {powerstats.durability}</p>
        </div>
      </div>
    );
  }
}

export default Cards;
