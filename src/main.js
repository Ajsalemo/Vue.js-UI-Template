import Vue from "vue";
import vuetify from "./plugins/vuetify";
import App from "./views/App.vue";
import { router } from "./routes";
import VueLazyload from "vue-lazyload";

Vue.use(VueLazyload, {
  loading: "./assets/images/germany.jpg",
});

Vue.config.productionTip = false;

new Vue({
  vuetify,
  router,
  render: (h) => h(App),
}).$mount("#app");
