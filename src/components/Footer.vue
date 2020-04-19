<template>
  <v-footer padless absolute>
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
export default {
  data() {
    return {
      links: ["Home", "About", "Blog", "Buildings", "Gallery", "Contact"],
    };
  },
};
</script>

<style lang="scss" scoped>
$footer-bottom-color: #000;
$footer-bottom-borderpx: 12px solid;

.footer-bottom-section {
  background-color: $footer-bottom-color;
}
.footer-top-border {
  border-right: $footer-bottom-borderpx $footer-bottom-color;
  border-bottom: $footer-bottom-borderpx $footer-bottom-color;
  border-left: $footer-bottom-borderpx $footer-bottom-color;
}
</style>
