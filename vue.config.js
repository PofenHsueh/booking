module.exports = {
  css: {
    loaderOptions: {
      scss: {
        prependData: '@import "@/assets/scss/index.scss";'
      }
    }
  },
  transpileDependencies: ["vuetify"]
};
