import React from "react";
import "./Macc.css";

class Macc extends React.Component {
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
      <React.Fragment className="cardcontainer">
        <img id="pics" alt="NoPictureInApi" src={image.url} />
        <p id="character_name">
          {biography["full-name"]
            ? biography["full-name"]
            : "Sorry NoName InTheApi"}
        </p>
        <p>Durability: {powerstats.durability}</p>
        <p>Attack Power: {AP}</p>
      </React.Fragment>
    );
  }
}

export default Macc;
