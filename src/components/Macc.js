import React from "react";
import "./Macc.css";
import data from "./data";

class Macc extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      apidata: "",
      image: "",
      powerstats: "",
      biography: "",
      attackPower: "",
      AP: "",
      randomInt: Math.floor(Math.random() * Math.floor(731)),
      /*       computerImage: data.computerChose.image,
      computerName: data.computerChose.name,
      computerDurability: data.computerChose.durability,
      computerPower: data.computerChose.power,
      userImage: data.userChose.image,
      userName: data.userChose.name,
      userDurability: data.userChose.durability,
      userPower: data.userChose.power, */
      clicked: false
    };
    this.calcAP = this.calcAP.bind(this);
    this.handleOnClick = this.handleOnClick.bind(this);
  }

  componentDidMount() {
    fetch(
      `https://www.superheroapi.com/api.php/4230529273639827/${this.state.randomInt}`
    )
      .then(res => res.json())
      .then(apidata => {
        this.setState({
          apidata: apidata,
          image: apidata.image,
          biography: apidata.biography,
          powerstats: apidata.powerstats
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

  handleOnClick = event => {
    /*     this.setState({
      clicked: true
    }); */
    let { image, powerstats, biography, AP } = this.state;
    data.userChose.image = image.url;
    data.userChose.name = biography["full-name"];
    data.userChose.durability = powerstats.durability;
    data.userChose.power = AP;
    console.log(data.userChose.name);
    console.log(data.userChose.durability);
    console.log(data.userChose.power);
  };

  render() {
    let { image, powerstats, biography, AP } = this.state;
    console.log();
    /*     const imgStyle = {
      height: "380px",
      paddingLeft: "1.5rem"
    }; */
    return (
      <React.Fragment className="cardcontainer">
        {this.state.smallCard ? (
          <img
            id="pics"
            alt="NoPictureInApi"
            src={image.url}
            style={{ height: 100 }}
          ></img>
        ) : (
          <div>
            <img
              id="pics"
              alt="NoPictureInApi"
              src={image.url}
              onClick={!this.state.clicked ? this.handleOnClick : null}
            ></img>
            <p id="character_name">
              {biography["full-name"]
                ? biography["full-name"]
                : "Sorry NoName InTheApi"}
            </p>
            <p>Durability: {powerstats.durability}</p>
            <p>Attack Power: {AP}</p>
          </div>
        )}
      </React.Fragment>
    );
  }
}

export default Macc;
