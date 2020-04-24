<template>
  <v-app>
    <v-container
      class="buildings-app-container d-flex flex-column justify-center"
      fluid
    >
      <v-lazy v-model="isActive" transition="fade-transition" class="pb-6">
        <HeaderImage src="construction.jpg" alt="Buildings page" height="35em">
          <Header header_text_one="Buildings" />
        </HeaderImage>
      </v-lazy>
      <v-row class="pt-6">
        <v-col v-for="(building, i) in buildingsArray" :key="i">
          <BuildingCards :building="building" />
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
import HeaderImage from "@/components/HeaderImage";
import Header from "@/components/Header";
import BuildingCards from "@/components/BuildingCards";
import { buildings } from "../shared/buildings";

export default {
  name: "Buildings",
  components: {
    HeaderImage,
    Header,
    BuildingCards,
  },
  props: {
    buildings: {
      type: Array,
    },
  },
  data() {
    return {
      isActive: false,
      buildingsArray: buildings,
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
