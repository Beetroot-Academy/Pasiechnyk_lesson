<template>
  <v-app>
    <BHeader />

    <v-main>
      <router-view />
    </v-main>
    <BFooter />
  </v-app>
</template>

<script>
import BHeader from "./views/BHeader.vue";
import BFooter from "./views/BFooter.vue";

export default {
  name: "App",
  data: () => ({
    //
  }),
  components: { BHeader, BFooter },
};
</script>
<style lang="scss">
@import url("./style/resetcss/reset.css");
@import url("./style/style.scss");
</style>
