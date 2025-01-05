import GistViewer from "./components/GistViewer.vue";

export default {
  install: (app) => {
    app.component("GistViewer", GistViewer);
  },
};
