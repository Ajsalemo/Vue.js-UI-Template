<template>
  <v-app>
    <v-container
      class="buildings-app-container d-flex flex-column justify-center"
      fluid
    >
      <v-lazy v-model="isActive" transition="fade-transition">
        <HeaderImage src="construction.jpg" alt="Buildings page" height="35em">
          <Header header_text_one="Buildings" />
        </HeaderImage>
      </v-lazy>
    </v-container>
  </v-app>
</template>

<script>
import HeaderImage from "@/components/HeaderImage";
import Header from "@/components/Header";

export default {
  name: "Buildings",
  components: {
    HeaderImage,
    Header,
  },
  data() {
    return {
      isActive: false,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/shared-styles.scss";

.buildings-app-container {
  @include views-container;
}
</style>
