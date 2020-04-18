import Vue from "vue";
import vuetify from "./plugins/vuetify";
import App from "./views/App.vue";
import { router } from "./routes";

Vue.config.productionTip = false;

new Vue({
  vuetify,
  router,
  render: (h) => h(App),
}).$mount("#app");
