<template>
  <v-app>
    <v-container
      class="about-app-container d-flex flex-column justify-center"
      fluid
    >
      <Appbar />
      <v-img
        src="../assets/images/germany.jpg"
        alt="Landing page"
        height="35em"
      >
        <Header header_text_one="About" />
      </v-img>
      <AboutCardContainer />
    </v-container>
  </v-app>
</template>

<script>
import Appbar from "@/components/Appbar";
import Header from "@/components/Header";
import AboutCardContainer from "@/components/AboutCardContainer";

export default {
  name: "About",
  components: {
    Appbar,
    Header,
    AboutCardContainer,
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/shared-styles.scss";

.about-app-container {
  @include views-container;
}
</style>
