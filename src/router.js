import { createRouter, createWebHistory } from "vue-router";

import AppHome from "./pages/AppHome.vue";
import AppAbout from "./pages/AppAbout.vue";
import AppContact from "./pages/AppContact.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: AppHome },
    { path: "/about", component: AppAbout },
    { path: "/contact", component: AppContact },
  ],
  scrollBehavior() {
    return { top: 0 };
  },
});
export { router };
