<template>
  <v-app>
    <v-container
      class="about-app-container d-flex flex-column justify-center"
      fluid
    >
      <v-lazy
        v-model="isActive"
        transition="fade-transition"
      >
        <HeaderImage
          src="germany.jpg"
          alt="About page"
          height="35em"
        >
          <Header header_text_one='About' />
        </HeaderImage>
      </v-lazy>
      <AboutCardContainer />
    </v-container>
  </v-app>
</template>

<script>
import Header from "@/components/Header";
import AboutCardContainer from "@/components/AboutCardContainer";
import HeaderImage from "@/components/HeaderImage";

export default {
  name: "About",
  components: {
    Header,
    AboutCardContainer,
    HeaderImage,
  },
  data() {
    return {
      isActive: false,
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/shared-styles.scss";

.about-app-container {
  @include views-container;
}
</style>
