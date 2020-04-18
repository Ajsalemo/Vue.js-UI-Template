<template>
  <h1 class="font-weight-thin display-2 text-right text-md-right white--text">
    {{ header_text }}
  </h1>
</template>

<script>
export default {
  name: "Header",
  props: {
    header_text: {
      type: String,
    },
  },
};
</script>

<style lang="scss" scoped>
$header-h1-background-color: #9b9bb454;

h1 {
  background-color: $header-h1-background-color;
}
</style>
