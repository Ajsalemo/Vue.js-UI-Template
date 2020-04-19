import VueRouter from "vue-router";
import App from "./views/App.vue";
import Vue from "vue";

const routes = [
  { path: "/", name: "Home", component: App },
  { path: "/about", name: "About", component: App },
];

Vue.use(VueRouter);

export const router = new VueRouter({
  routes,
  mode: "history"
});
