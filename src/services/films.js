import SWAPI from "./baseUrl";
import Axios from "axios";

const films = {
  async getFilmById(id) {
    const data = await SWAPI.get(`films/${id}`);
    const film = data.data;
    // console.log("FILM with id FROM API", film);
    return film;
  },

  async getCharacterDetail(url) {
    const data = await Axios.get(url);
    const characterDetail = data.data;
    // console.log("getCharacterDetail", characterDetail);
    return characterDetail;
  },

  async getCharacterByFilm(id) {
    const film = await this.getFilmById(id);
    const filmCharacters = film.characters;
    console.log("FILM characters", filmCharacters);

    const allCharacterData = await Promise.all(
      filmCharacters.map(
        async filmCharacter => await this.getCharacterDetail(filmCharacter)
      )
    );
    return allCharacterData;
  }
};

export default films;
