import Vue from "vue";
import VueLazyload from "vue-lazyload";

export const vueLazyLoad = Vue.use(VueLazyload, {
  loading: require("../assets/images/blurred.jpg"),
});
