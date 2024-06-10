import { createRouter, createWebHistory } from "vue-router";

import AppHome from "./pages/AppHome.vue";
import AppAbout from "./pages/AppAbout.vue";
import AppContact from "./pages/AppContact.vue";

const routes = [
  { path: "/", component: AppHome },
  { path: "/about", component: AppAbout },
  { path: "/contact", component: AppContact },
];
const router = createRouter({
  history: createMemoryHistory(),
  routes,
});
