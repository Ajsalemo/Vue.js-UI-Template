<template>
  <v-app>
    <v-container
      class="app-container d-flex flex-column justify-center"
      fluid
      relative
    >
      <Appbar />
      <v-lazy v-model="isActive" transition="fade-transition">
        <v-img src="../assets/images/germany.jpg" alt="Landing page" height="100vh" position="relative">
          <Header header_text="Modern Architecure" />
        </v-img>
      </v-lazy>
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
      isActive: false,
    };
  },
};
</script>

<style lang="scss" scoped>
$app-container-background-color: #212121;

.app-container {
  height: 100vh;
  background-position: center;
  background-color: $app-container-background-color;
}
</style>
