<template>
  <v-app>
    <v-container
      class="app-container d-flex flex-column justify-center ps-md-12"
      fluid
    >
      <Appbar />
      <Header header_text="Modern Architecure" />
    </v-container>
    <router-view></router-view>
  </v-app>
</template>

<script>
import Header from "@/components/Header";
import Appbar from "@/components/Appbar";

export default {
  name: "App",
  components: {
    Header,
    Appbar
  }
};
</script>

<style scoped>
.app-container {
  background-image: url("../assets/images/france.jpg");
  height: 100vh;
}
</style>
