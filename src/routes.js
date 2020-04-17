import VueRouter from "vue-router";
import App from "./views/App.vue";
import Vue from "vue";

const routes = [{ path: "/", name: "home", component: App }];

Vue.use(VueRouter);

export const router = new VueRouter({
  routes
});
