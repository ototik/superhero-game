import React, { Component } from "react";
import "./Welcome.css";
import { Link } from "react-router-dom";

class Welcome extends Component {
  state = {
    on: false
  };

  toggle = () => {
    this.setState({
      on: !this.state.on
    });
  };

  btn = () => {
    this.btn.focus();
  };

  render() {
    return (
      <div className="container">
        <div className="main-content">
          <h1 id="game-title">Hero Game</h1>
          <h1 id="welcome">Welcome</h1>
          <button id="how-to" onClick={this.toggle}>
            Let's see how to play this game
          </button>
          {this.state.on && (
            <h3>
              A Lorem Ipsum egy egyszerû szövegrészlete, szövegutánzata a
              betûszedõ és nyomdaiparnak. A Lorem Ipsum az 1500-as évek óta
              standard szövegrészletként szolgált az iparban; mikor egy
              ismeretlen nyomdász összeállította a betûkészletét és egy
              példa-könyvet vagy szöveget nyomott papírra, ezt használta. Nem
              csak 5 évszázadot élt túl, de az elektronikus betûkészleteknél is
              változatlanul megmaradt. Az 1960-as években népszerûsítették a
              Lorem Ipsum részleteket magukbafoglaló Letraset lapokkal, és
              legutóbb softwarekkel mint például az Aldus Pagemaker.
            </h3>
          )}
          <br />
          <Link to="/Game">
            <button
              id="start-game"
              ref={ref => {
                this.btn = ref;
              }}
            >
              Start the game
          </button>
          </Link>
        </div>
      </div>
    );
  }
}

export default Welcome;