import Vue from "vue";
import vuetify from "./plugins/vuetify";
import App from "./views/App.vue";
import { router } from "./routes";
import { vueLazyLoad } from "./plugins/vue-lazyload";

Vue.config.productionTip = false;

new Vue({
  vueLazyLoad,
  vuetify,
  router,
  render: (h) => h(App),
}).$mount("#app");
