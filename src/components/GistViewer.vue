<template>
  <div>
    <iframe
      :src="gistEmbedUrl"
      frameborder="0"
      width="100%"
      style="min-height: 300px;"
    ></iframe>
  </div>
</template>

<script>
export default {
  name: "GistViewer",
  props: {
    gistUrl: {
      type: String,
      required: true,
    },
  },
  computed: {
    gistEmbedUrl() {
      const id = this.gistUrl.split("/").pop();
      return `https://gist.github.com/${id}.js`;
    },
  },
};
</script>

<style scoped>
/* Add optional styles for iframe or container */
</style>
