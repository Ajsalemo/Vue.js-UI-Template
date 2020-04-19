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
          height="100vh"
        >
            <Header header_text_two="About" />
        </v-img>
    </v-container>
  </v-app>
</template>

<script>
import Appbar from "@/components/Appbar";
import Header from "@/components/Header";

export default {
  name: "About",
  components: {
    Appbar,
    Header
  },
};
</script>

<style lang="scss" scoped>
@import '../assets/scss/shared-styles.scss';

.about-app-container {
  @include views-container
}
</style>
