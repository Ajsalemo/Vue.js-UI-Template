<template>
  <v-footer padless :absolute="changeFooterPosition">
    <v-row justify="center" no-gutters class="footer-top-border grey darken-4">
      <v-btn
        v-for="link in links"
        :key="link"
        :to="link"
        color="white"
        text
        rounded
        class="my-2"
      >
        {{ link }}
      </v-btn>
      <v-col class="py-4 text-center white--text" cols="12">
        {{ new Date().getFullYear() }} — <strong>Anthony Salemo</strong>
      </v-col>
    </v-row>
  </v-footer>
</template>

<script>
import { navNameList } from "../shared/nav-name-list";

export default {
  data() {
    return {
      links: navNameList,
    };
  },
  computed: {
    changeFooterPosition() {
      let footerPosition =
        this.$route.path === "/" || this.$route.path === "/Home" ? true : false;
      return footerPosition;
    },
  },
};
</script>

<style lang="scss" scoped>
$footer-bottom-color: #000;

.footer-bottom-section {
  background-color: $footer-bottom-color;
}
</style>
