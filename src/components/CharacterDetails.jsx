import React, { Component } from "react";
import Character from "../services/characterService";

class CharacterDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      characterDetails: []
    };
  }
  async componentDidMount() {
    console.log("params id", this.props.match.params.id);
    await Character.getSwCharacterDetails(
      this.props.match.params.id,
      characterDetails => {
        if (characterDetails) {
          console.log("character details", characterDetails);
          this.setState({ characterDetails: characterDetails }, () => {
            console.log("details saved", this.state.characterDetails);
          });
        }
      }
    );
  }
  render() {
    return (
      <div>
        {this.state.characterDetails.length > 0 ? (
          <div class="card" style={{ width: "18rem" }}>
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
              <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
              <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
            </div>
          </div>
        ) : (
          <span>loading...</span>
        )}
      </div>
    );
  }
}

export default CharacterDetails;
