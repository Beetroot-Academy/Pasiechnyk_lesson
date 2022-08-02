<template>
  <v-card class="overflow-hidden">
    <v-app-bar
      color="#151515"
      dark
      shrink-on-scroll
      prominent
      src="https://abrakadabra.fun/uploads/posts/2021-12/1639310993_1-abrakadabra-fun-p-zastavki-na-telefon-iz-komiksov-1.jpg"
    >
      <template v-slot:img="{ props }">
        <v-img
          position="80% 1%"
          v-bind="props"
          gradient="to top right, rgba(0,0,0,.2), rgba(25,32,50,.5)"
        ></v-img>
      </template>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>

      <template v-slot:extension>
        <v-tabs align-with-title>
          <v-tab id="home" to="/home">Home</v-tab>
          <v-tab id="characters" to="/characters">Characters</v-tab>
        </v-tabs>
      </template>
    </v-app-bar>
    <BFooter />
  </v-card>
</template>

<script>
export default {
  name: "BHeader",
  components: {},
};
</script>
<style></style>
