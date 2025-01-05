import { createApp } from "vue";
import App from "./App.vue";
import GistViewerVue from "gist-viewer-vue";

const app = createApp(App);
app.use(GistViewerVue);
app.mount("#app");
