import { createApp } from "vue";

//import style
import "./assets/scss/main.scss";

//import router
import router from "/src/router.js";

//import vue root component
import App from "./App.vue";

createApp(App).use(router).mount("#app");
