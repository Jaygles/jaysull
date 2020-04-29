import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "@/views/Home.vue";
import Experience from "@/views/Experience.vue";
import Contact from "@/views/Contact.vue";
import Things from "@/views/Things.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/experience",
    name: "Experience",
    component: Experience,
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contact,
  },

  {
    path: "/things",
    name: "Things",
    component: Things,
  },
  {
    path: "*",
    redirect: { name: "Home" },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
