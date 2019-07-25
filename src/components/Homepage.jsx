import React, { Component } from "react";
import Navbar from "./Navbar";
import Character from "../services/characterService";
import CharacterFilter from "./CharacterFilter";
import { Link } from "react-router-dom";
import { CLIENT_RENEG_LIMIT } from "tls";

class Homepage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      allCharacters: []
    };
  }
  componentDidMount() {
    Character.getSwCharacter(data => {
      if (data) {
        this.setState({ allCharacters: data.results });
      }
    });
  }

  getCharactersByFilter = characters => {
    console.log("getCharactersByFilter", characters);
    this.setState({ allCharacters: characters });
    console.log("getCharactersByFilter", this.state.allCharacters);
  };

  render() {
    return (
      <div>
        <Navbar />
        <CharacterFilter getCharactersByFilter={this.getCharactersByFilter} />
        <div className="container">
          {this.state.allCharacters.length > 0 ? (
            this.state.allCharacters.map((item, index) => {
              return (
                <div
                  className="card mx-3 mt-3  "
                  style={{ width: "18rem", float: "left" }}
                  key={index}
                >
                  <div className="card-body">
                    <h5 className="card-title">{item.name}</h5>
                    <p className="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    <Link
                      to={`/character/${index + 1}`}
                      className="btn btn-primary"
                    >
                      View More
                    </Link>
                  </div>
                </div>
              );
            })
          ) : (
            <span>loading</span>
          )}
        </div>
      </div>
    );
  }
}
export default Homepage;
