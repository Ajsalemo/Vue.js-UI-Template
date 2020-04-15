<template>
  <v-app>
    <Appbar />
    <v-container class="app-container d-flex flex-column justify-center pr-md-12" fluid>
      <Header />
    </v-container>
  </v-app>
</template>

<script>
import Header from './components/Header';
import Appbar from './components/Appbar'

export default {
  name: 'App',
  components: {
    Header,
    Appbar
  },
};
</script>

<style scoped>
.app-container {
  background-image: url("./assets/images/reggioemilia.jpg");
  height: 100vh;
}
</style>

