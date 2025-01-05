import GistView from "./components/GistViewer.vue";

export default {
  install: (app, config) => {
    app.component("GistView", GistView);
  },
};
