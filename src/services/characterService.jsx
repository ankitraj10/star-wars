import * as Apis from "./Apis";
import axios from "axios";

const Character = {
  getSwCharacter(callback) {
    axios
      .get(Apis.getCharacterUrl())
      .then(result => {
        console.log(result);
        setTimeout(() => {
          callback(result.data);
        }, 1);
      })
      .catch(error => {
        console.log(error.response);
        setTimeout(() => {
          callback(null);
        }, 1);
      });
  },
  getSwCharacterByFilms(callback) {
    axios
      .get(Apis.getFilmsUrl())
      .then(result => {
        console.log(result);
        setTimeout(() => {
          callback(result.data);
        }, 1);
      })
      .catch(error => {
        console.log(error.response);
        setTimeout(() => {
          callback(null);
        }, 1);
      });
  },
  getSwCharacterBySpecies(callback) {
    axios
      .get(Apis.getSpeciesUrl())
      .then(result => {
        console.log(result);
        setTimeout(() => {
          callback(result.data);
        }, 1);
      })
      .catch(error => {
        console.log(error.response);
        setTimeout(() => {
          callback(null);
        }, 1);
      });
  },
  getSwCharacterByBirth(callback) {
    axios
      .get(Apis.getCharacterByBirthUrl())
      .then(result => {
        console.log(result);
        setTimeout(() => {
          callback(result.data);
        }, 1);
      })
      .catch(error => {
        console.log(error.response);
        setTimeout(() => {
          callback(null);
        }, 1);
      });
  }
};
export default Character;
