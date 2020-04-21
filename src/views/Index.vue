<template>
  <v-app>
    <Appbar />
    <router-view></router-view>
    <Footer />
  </v-app>
</template>

<script>
import Footer from "@/components/Footer";
import Appbar from "@/components/Appbar";

export default {
  name: "Index",
  components: {
      Footer,
      Appbar,
  }
};
</script>
