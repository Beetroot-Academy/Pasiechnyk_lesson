import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import { public_key } from "../marvel";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    characters: [],
    character: {},
    url: "",
  },
  getters: {},
  mutations: {
    getCharacters(state) {
      state.characters = [];
      axios
        .get(
          `https://gateway.marvel.com:443/v1/public/characters?apikey=${public_key}`
        )
        .then((result) => {
          result.data.data.results.forEach((item) => {
            console.log(item);
            state.characters.push(item);
          });
        })
        .catch((error) => {
          console.log(error);
        });
    },
    getCharacter(state, id) {
      state.character = null;
      axios
        .get(
          `https://gateway.marvel.com:443/v1/public/characters/${id}?apikey=${public_key}`
        )
        .then((result) => {
          console.log("getCharacter", result);
          state.character = result.data.data.results[0];
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  actions: {
    getCharacters: (context) => {
      context.commit("getCharacters");
    },
    getCharacter(context, id) {
      context.commit("getCharacter", id);
    },
  },
  modules: {},
});
