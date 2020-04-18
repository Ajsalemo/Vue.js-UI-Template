<template>
  <v-app-bar
    class="transparent d-flex justify-space-around"
    fixed
    flat
    height="150"
  >
    <router-link
      to="/"
      class="body-2 white--text appbar-link-underline pr-8 ps-8 hidden-sm-and-down"
      v-for="link in appLinks"
      :key="link"
      >{{ link }}</router-link
    >

    <v-btn icon class="ms-12 hidden-sm-and-down">
      <v-icon>mdi-magnify</v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script>
export default {
  name: "Appbar",
  data() {
    return {
      appLinks: ["Home", "About", "Blog", "Buildings", "Gallery", "Contact"],
    };
  },
};
</script>

<style lang="scss" scoped>
$appbar-background-color: #9b9bb454;

.appbar-link-underline {
  text-decoration: none;
  transition: ease-in-out 0.6s all;
  &:hover {
    background-color: $appbar-background-color;
    transition: ease-in-out 0.6s all;
  }
}
</style>
