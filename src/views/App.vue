<template>
  <v-app>
    <v-container
      class="app-container d-flex flex-column justify-center "
      fluid
    >
      <Appbar />
      <Header header_text="Modern Architecure" />
    </v-container>
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
  background-image: url("../assets/images/germany.jpg");
  background-position: center;
  height: 100vh;
  border: 12px solid #2f233d;
}
</style>
