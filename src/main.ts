import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import installElementPlus from "./plugins/element";

const app = createApp(App);
installElementPlus(app);
app.use(router).mount("#app");

export type { app };
