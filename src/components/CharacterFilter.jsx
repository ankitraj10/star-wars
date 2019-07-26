import React, { Component } from "react";
import Character from "../services/characterService";
import films from "../services/films";
import "../styles/styles.css";

class CharacterFilter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchQuery: "",
      selectedCategry: null,
      displayName: null,
      categoryList: [],
      films: [],
      species: []
    };
  }

  fetchCategoryList = selectedCategry => {
    console.log("fetchCategoryByfilter", selectedCategry);
    switch (selectedCategry) {
      case "films":
        Character.getSwCharacterByFilms(films => {
          if (films) {
            console.log("flms", films.results);
            this.setState({
              films: films.results,
              categoryList: films.results
            });
          }
        });
        return;

      case "species":
        Character.getSwCharacterBySpecies(species => {
          if (species) {
            console.log("species", species);
            this.setState({
              species: species.results,
              categoryList: species.results
            });
          }
        });
        return;

      default:
        break;
    }
  };

  fetchCharactersByCategory = async id => {
    // e.preventDefault();
    console.log("selected Categry", id);

    const charactersByFilm = await films.getCharacterByFilm(id);

    console.log("FILTERED by ID##", charactersByFilm);

    this.props.getCharactersByFilter(charactersByFilm);
  };

  handleChange = async e => {
    e.preventDefault();
    console.log("category name", e.target.value, e.target.name);

    await this.setState({
      selectedCategry: e.target.value,
      displayName: e.target.name
    });
    console.log("category name state", this.state.selectedCategry);
    this.fetchCategoryList(this.state.selectedCategry);
  };

  render() {
    return (
      <div>
        <div className="row">
          <div className="col d-flex justify-content-end">
            <div className="dropdown">
              <button
                className="btn btn-secondary dropdown-toggle mt-4"
                id="dropdownMenuLink"
                data-toggle="dropdown"
                aria-haspopup="true"
              >
                {this.state.displayName
                  ? this.state.displayName
                  : "Select Filter"}
              </button>

              <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                <button
                  className="dropdown-item"
                  name="Films"
                  value="films"
                  onClick={this.handleChange}
                >
                  Films
                </button>
                <button
                  className="dropdown-item"
                  name="Species"
                  value="species"
                  onClick={this.handleChange}
                >
                  Species
                </button>
                <button
                  className="dropdown-item"
                  name="Birth Year"
                  value="birth_year"
                  onClick={this.handleChange}
                >
                  Birth Year
                </button>
              </div>
            </div>
          </div>
          <div className="col d-flex justify-content-start">
            {this.state.selectedCategry ? (
              <div className="dropdown">
                <button
                  className="btn btn-secondary dropdown-toggle mt-4"
                  id="dropdownMenuLink"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                >
                  {this.state.displayName ? (
                    <span>Select {this.state.displayName}</span>
                  ) : null}
                </button>

                <div
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuLink"
                >
                  {this.state.categoryList.length > 0 ? (
                    this.state.categoryList.map((item, index) => {
                      return (
                        <button
                          className="dropdown-item"
                          name="Films"
                          value="films"
                          key={index}
                          onClick={() =>
                            this.fetchCharactersByCategory(index + 1)
                          }
                        >
                          {item.title ? item.title : item.name}
                        </button>
                      );
                    })
                  ) : (
                    <span>loading</span>
                  )}
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    );
  }
}

export default CharacterFilter;
