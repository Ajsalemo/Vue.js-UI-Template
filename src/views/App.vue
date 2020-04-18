<template>
  <v-app>
    <v-container
      class="app-container d-flex flex-column justify-center"
      fluid
      v-lazy:background-image="imgUrl"
    >
      <Appbar />
      <Header header_text="Modern Architecure" />
      <Footer />
    </v-container>
  </v-app>
</template>

<script>
import Header from "@/components/Header";
import Appbar from "@/components/Appbar";
import Footer from "@/components/Footer";

export default {
  name: "App",
  components: {
    Header,
    Appbar,
    Footer,
  },
  data() {
    return {
      imgUrl: "../assets/images/germany.jpg"
    }
  },
};
</script>

<style lang="scss" scoped>
$app-container-class-border-color: #000;

.app-container {
  background-position: center;
  height: 100vh;
  border: 12px solid $app-container-class-border-color;
}
</style>
