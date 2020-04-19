import Vue from "vue";
import vuetify from "./plugins/vuetify";
import Index from "./views/Index.vue";
import { router } from "./routes";

Vue.config.productionTip = false;

new Vue({
  vuetify,
  router,
  render: (h) => h(Index),
}).$mount("#app");
