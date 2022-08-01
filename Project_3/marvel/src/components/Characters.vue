<template>
  <div class="container">
    <div class="characters__title">
      <h2 class="title">MARVEL CHARACTERS LIST</h2>
    </div>
    <div class="characters__search search">
      <input class="search__text" type="text" placeholder="Search..." />
      <button>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-search"
          viewBox="0 0 16 16"
        >
          <path
            d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"
          />
        </svg>
      </button>
    </div>
    <div class="characters__cards">
      <router-link
        v-for="character in characters"
        :key="character.id"
        :to="{ name: 'character', params: { id: character.id } }"
      >
        <div class="card">
          <div
            :style="{
              backgroundImage: `url(${character.thumbnail.path}/portrait_uncanny.jpg)`,
            }"
            class="card__img"
          ></div>
          <div class="characters__subtitle">
            <h3>{{ character.name }}</h3>
          </div>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
import { public_key, private_key } from "../marvel";
import axios from "axios";
import { mapState } from "vuex";

export default {
  name: "Characters",
  data: {
    search: "",
  },

  mounted() {
    this.$store.dispatch("getCharacters");
    console.log(this.characters);
  },
  computed: {
    ...mapState({
      characters: (state) => state.characters,
      searchData: function () {},
    }),
  },
};
</script>
<style></style>
