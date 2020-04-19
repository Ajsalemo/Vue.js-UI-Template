<template>
  <v-app>
    <router-view></router-view>
    <Footer />
  </v-app>
</template>

<script>
import Footer from "@/components/Footer";

export default {
  name: "Index",
  components: {
      Footer,
  }
};
</script>
