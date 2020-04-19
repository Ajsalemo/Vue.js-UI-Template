<template>
  <v-card class="mx-auto about-card" max-width="344" tile>
    <v-card-text>
      <p class="display-1 white--text">
        {{ title_text }}
      </p>
      <div class="grey--text">
        {{ body_text }}
      </div>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: "AboutCard",
  props: {
    title_text: {
      type: String,
    },
    body_text: {
      type: String,
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/shared-styles.scss";

.about-card {
  background-color: $views-background-color;
}
</style>
