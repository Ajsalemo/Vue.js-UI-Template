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
console.log(`VUE_APP_APIURL is ${process.env.VUE_APP_APIURL}`);
console.log(`APIURL is ${process.env.APIURL}`);
export default {
  name: "Index",
  components: {
    Footer,
    Appbar,
  },
};
</script>
