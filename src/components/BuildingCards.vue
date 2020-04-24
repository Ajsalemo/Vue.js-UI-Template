<template>
  <v-card
    width="600"
    class="mx-auto building-post-background flex-sm-shrink-1"
    height="fit-content"
    tile
    flat
  >
    <v-lazy v-model="isActive" transition="fade-transition">
      <HeaderImage :src="building.image" height="300"></HeaderImage>
    </v-lazy>
    <v-card-text class="white--text text-center">
      <h1>{{ building.title }}</h1>
    </v-card-text>

    <v-card-text class="white--text">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil cupiditate
      placeat rerum soluta illo ab temporibus sed? Ratione suscipit ducimus
      dolores architecto vel inventore consectetur, facere possimus, accusantium
      nulla quod.
    </v-card-text>
  </v-card>
</template>

<script>
import HeaderImage from "@/components/HeaderImage";

export default {
  name: "BuildingCards",
  components: {
    HeaderImage,
  },
  props: {
      building: {
          type: Object
      }
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

.building-post-background {
  background-color: $views-background-color;
}
</style>
