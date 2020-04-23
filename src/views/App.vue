<template>
  <v-app>
    <v-container
      class="app-container d-flex flex-column justify-center"
      fluid
    >
      <v-lazy
        v-model="isActive"
        transition="fade-transition"
      >
        <HeaderImage
          src="about.jpg"
          alt="Landing page"
          height="100vh"
        >
          <Header header_text_one="Modern" header_text_two="Architecure" />
        </HeaderImage>
      </v-lazy>
    </v-container>
  </v-app>
</template>

<script>
import Header from "@/components/Header";
import HeaderImage from "@/components/HeaderImage";

export default {
  name: "App",
  components: {
    Header,
    HeaderImage,
  },
  data() {
    return {
      isActive: false,
    };
  },
};
</script>

<style lang="scss" scoped>
@import '../assets/scss/shared-styles.scss';

.app-container {
  @include views-container
}
</style>
