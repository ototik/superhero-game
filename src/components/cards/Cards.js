import React from "react";
import './cards.css';

class Cards extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            apidata: "",
            image: "",
            powerstats: "",
            biography: ""
        }
    }

    componentDidMount() {
        fetch('https://www.superheroapi.com/api.php/4230529273639827/310')
        .then(res => res.json())
        .then((data) => {
          this.setState({ 
              apidata: data,
              image: data.image,
              biography: data.biography,
              powerstats: data.powerstats
            })
        })
    }

    createCard() {

    }

    render() {
        let { image, powerstats, biography } = this.state
        console.log('render', biography, powerstats)
        return (
            <div>
                <div className='cardcontainer'>
                    <img alt='Harry Potter' src={image.url} />
                    <h2>{biography["full-name"]}</h2>
                    <p>Intelligence {powerstats.intelligence}</p>
                    <p>Strength {powerstats.strength}</p>
                    <p>Speed {powerstats.speed}</p>
                    <p>Durability {powerstats.durability}</p>
                    <p>Power {powerstats.power}</p>
                    <p>Combat {powerstats.combat}</p>
                </div>
            </div>
        )
    }
}

export default Cards;

