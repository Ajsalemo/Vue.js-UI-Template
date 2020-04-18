<template>
  <h1 class="font-weight-thin display-2 text-right text-md-right white--text d-flex align-center justify-center">
    {{ header_text }}
  </h1>
</template>

<script>
export default {
  name: "Header",
  props: {
    header_text: {
      type: String,
    }
  },
};
</script>

<style lang="scss" scoped>
h1 {
  height: 100%;
}
</style>
