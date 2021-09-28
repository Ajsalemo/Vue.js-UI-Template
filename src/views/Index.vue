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

console.log(`VUE_APP_LOCAL_GIT: ${process.env.VUE_APP_LOCAL_GIT}`)
console.log(`VUE_APP_DEV_OPS: ${process.env.VUE_APP_DEV_OPS}`)
export default {
  name: "Index",
  components: {
    Footer,
    Appbar,
  },
};
</script>
