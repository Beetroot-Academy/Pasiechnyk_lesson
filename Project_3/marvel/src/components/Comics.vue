<template>
  <div class="container">
    <div class="characters__title">
      <h2 class="title">MARVEL COMICS LIST</h2>
    </div>
  </div>
</template>

<script>
import { public_key, private_key } from "../marvel";
import axios from "axios";

export default {
  name: "Comics",
  components: {},
  data: () => ({
    searchComics: "",
    comics: [],
    searchResults: [],
    page: 1,
    searchPage: 1,
  }),
  mounted() {
    this.getComics();
  },
  methods: {
    async getComics() {
      const page = this.page;
      await axios
      .get(`https://gateway.marvel.com:443/v1/public/comics?apikey=${public_key}`)
      .then((res) => {
        this.scrolToTop();
        console.log(res);
        this.comics = res.data.data;
      });
    },
    async searchComics() {
      const searchComics = this.searchComics;
      const searchPage = this.searchPage;
      await axios
      .get(`https://gateway.marvel.com:443/v1/public/comics/${search}?apikey=${public_key}`)
      .then((res) => {
        this.scrolToTop();
        console.log(res);
        this.searchResults = res.data.data;
      });
    },
    scrollToTop() {
      window.scrollTo(0, 0);
    },
  },
};
</script>

<style>

</style>
