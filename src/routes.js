import Vue from "vue";
import VueRouter from "vue-router";
import About from "./views/About.vue";
import App from "./views/App.vue";
import Blog from "./views/Blog.vue";
import Buildings from "./views/Buildings.vue";
import Contact from "./views/Contact.vue";

const routes = [
  { path: "/", name: "Index", component: App },
  { path: "/Home", name: "Home", component: App },
  { path: "/About", name: "About", component: About },
  { path: "/Blog", name: "Blog", component: Blog },
  { path: "/Buildings", name: "Buildings", component: Buildings },
  { path: "/Contact", name: "Contact", component: Contact },
];

Vue.use(VueRouter);

export const router = new VueRouter({
  routes,
  mode: "history",
});
