<!-- eslint-disable vue/valid-v-on -->
<template>
  <v-menu class="hidden-md-and-up">
    <template v-slot:activator="{ on }">
      <v-icon class="white--text hidden-md-and-up" dark v-on="on" size="32">
        mdi-menu
      </v-icon>
    </template>
    <v-list color="grey darken-3">
      <v-list-item
        v-for="(mobileLinkName, index) in appLinks"
        :key="index"
      >
        <v-list-item-title class="white--text">{{
          mobileLinkName
        }}</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-menu>
</template>

<script>
export default {
  name: "MobileNav",
  props: {
      appLinks: {
          type: Array
      }
  }
};
</script>
