module.exports = {
  transpileDependencies: ["vuetify"],
  // publicPath: process.env.NODE_ENV === "production" ? "/booking/" : "/",
  configureWebpack: {
    performance: {
      hints: false,
      maxEntrypointSize: 512000,
      maxAssetSize: 512000
    }
  },
  css: {
    loaderOptions: {
      scss: {
        prependData: '@import "@/assets/scss/index.scss";'
      }
    }
  }
};
