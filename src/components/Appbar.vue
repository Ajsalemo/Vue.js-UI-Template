<template>
  <v-app-bar
    class="transparent d-flex justify-space-around"
    fixed
    flat
    height="150"
  >
    <router-link
      to="/"
      class="body-2 white--text appbar-link-underline pr-8 ps-8"
      >Home</router-link
    >
    <router-link
      to="/"
      class="body-2 white--text appbar-link-underline pr-8 ps-8"
      >About</router-link
    >

    <router-link
      to="/"
      class="body-2 white--text appbar-link-underline pr-8 ps-8"
      >Blog</router-link
    >

    <router-link
      to="/"
      class="body-2 white--text appbar-link-underline pr-8 ps-8"
      >Buildings</router-link
    >

    <router-link
      to="/"
      class="body-2 white--text appbar-link-underline pr-8 ps-8"
      >Gallery</router-link
    >

    <v-btn icon class="ms-12">
      <v-icon>mdi-magnify</v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script>
export default {
  name: "Appbar"
};
</script>

<style scoped>
.appbar-link-underline {
  text-decoration: none;
  transition: ease-in-out 0.6s all;
}
.appbar-link-underline:hover {
  background-color: #9b9bb454;
  transition: ease-in-out 0.6s all;
}
</style>
