<template>
  <div>
    <div class="container comic__flex">
      <div class="flex" v-for="com in comic" :key="com.id">
        <h3>{{ com.name }}</h3>
        <p>{{ com.descreption }}</p>
      </div>
      <div class="flex2">
        <img :src="url" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
import { public_key } from "../marvel";
import axios from "axios";
import { mapState } from "vuex";

export default {
  name: "Comic",

  data() {
    return {
      url: "",
      size: "portrait_xlarge.jpg",
    };
  },
  mounted() {
    this.$store.dispatch("getComic", this.$route.params.id);
    this.getImage();
  },
  computed: {
    ...mapState({
      comic: (state) => state.comic,
      preUrl: (state) => state.url,
    }),
  },
  methods: {
    getImage: function () {
      this.url = `${this.preUrl}${this.size}`;
    },
  },
};
</script>