<template>
  <div class="container">
    <div class="characters__title">
      <h2 class="title">MARVEL CHARACTERS LIST</h2>
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
              backgroundImage: `url(${character.thumbnail.path}/${size})`,
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
  data() {
    return {
      size: "portrait_uncanny.jpg",
    };
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
</style>
