import VueRouter from "vue-router";
import App from "./views/App.vue";
import About from "./views/About.vue";
import Vue from "vue";

const routes = [
  { path: "/", name: "Index", component: App },
  { path: "/Home", name: "Home", component: App },
  { path: "/About", name: "About", component: About },
];

Vue.use(VueRouter);

export const router = new VueRouter({
  routes,
  mode: "history"
});
