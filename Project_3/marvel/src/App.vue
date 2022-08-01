<template>
  <v-app>
    <BHeader />
    
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import BHeader from "./views/BHeader.vue";

export default {
  name: "App",
  data: () => ({
    //
  }),
  components: { BHeader },
};
</script>
<style lang="scss">
@import url('./style/resetcss/reset.css');
@import url('./style/style.scss');


</style>
