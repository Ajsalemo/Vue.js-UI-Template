<template>
  <h1 class="font-weight-bold display-2 text-center text-md-left white--text">
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
