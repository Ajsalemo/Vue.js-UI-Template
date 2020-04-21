<template>
  <v-app-bar
    class="d-flex justify-start justify-md-space-around hidden-sm-and-down"
    color="#212121"
    :absolute="changeAppbarPosition"
    flat
    height="150"
  >
    <v-btn
      :to="link"
      class="body-2 white--text appbar-link-underline pr-8 ps-8 hidden-sm-and-down"
      text
      v-for="link in appLinks"
      :key="link"
      >{{ link }}</v-btn
    >

    <v-btn icon class="ms-12 hidden-sm-and-down blue--text">
      <v-icon>mdi-magnify</v-icon>
    </v-btn>
    <!-- This sub-component displays when the viewport sizes down to 'sm'(Small - 600px) -->
    <!-- This component displays the mobile navbar, which is opened by clicking on the hamburger(menu) icon -->
    <MobileNav v-bind:appLinks="appLinks" />
  </v-app-bar>
</template>

<script>
import { navNameList } from "../shared/nav-name-list";
import MobileNav from "./MobileNav";

export default {
  name: "Appbar",
  components: {
    MobileNav,
  },
  data() {
    return {
      appLinks: navNameList,
    };
  },
  computed: {
    changeAppbarPosition() {
      let appbarPosition = this.$route.path !== "/Blog" ? true : false;
      return appbarPosition;
    },
  },
};
</script>

<style lang="scss" scoped>
$appbar-background-color: #6c6c9754;

.appbar-link-underline {
  text-decoration: none;
  transition: ease-in-out 0.6s all;
  &:hover {
    background-color: $appbar-background-color;
    transition: ease-in-out 0.6s all;
  }
}
</style>
