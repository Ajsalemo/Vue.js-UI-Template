<template>
  <div id="app">
    <Header />
  </div>
</template>

<script>
import Header from "./components/Header"

export default {
  name: "App",
  components: {
    Header,
  }
};
</script>

<style>
body {
  margin: 0;
}
#app {
  background-image: url(./assets/images/reggioemilia.jpg);
  background-position: center;
  height: 100vh;
}
</style>
