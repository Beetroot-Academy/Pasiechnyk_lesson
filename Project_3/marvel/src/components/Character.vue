<template>
  <div class="container">
    <div v-if="!character">
      <img
        class="loading"
        src="https://i.gifer.com/embedded/download/4M4z.gif"
        alt="loading"
      />
    </div>
    <div v-else class="character__container">
      <div class="character__img">
        <img :src="`${character.thumbnail.path}/${size}`" alt="" />
      </div>
      <div class="character__content">
        <h3 class="character__subtitle">{{ character.name }}</h3>
        <p class="character__text">{{ character.description }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { public_key } from "../marvel";
import axios from "axios";
import { mapState } from "vuex";

export default {
  name: "Character",

  data() {
    return {
      url: "",
      size: "portrait_uncanny.jpg",
    };
  },
  created() {
    this.$store.dispatch("getCharacter", this.$route.params.id);
  },
  computed: {
    ...mapState({
      character: (state) => state.character,
      preUrl: (state) => state.url,
    }),
  },
  methods: {},
};
</script>

<style></style>
