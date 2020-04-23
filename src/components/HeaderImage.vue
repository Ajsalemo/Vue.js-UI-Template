<template>
  <v-img :src="require(`@/assets/images/${src}`)" :alt="alt" :height="height">
    <slot></slot>
  </v-img>
</template>

<script>
export default {
  name: "HeaderImage",
  props: {
    src: {
      type: String,
    },
    alt: {
      type: String,
    },
    height: {
      type: String,
    }
  },
};
</script>
