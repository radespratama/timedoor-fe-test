import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

import { createApp } from "vue";

import App from "./App.vue";
import { store } from "./store/index";

const app = createApp(App);

app.use(store);
app.mount("#app");
