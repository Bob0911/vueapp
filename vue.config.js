module.exports = {
  css: {
    loaderOptions: {
      less: {
        //  less-loader 6.0 之前
        // javascriptEnabled: true
        //  less-loader 6.0 之后
        lessOptions: {
          javascriptEnabled: true
        }
      }
    }
  },
  devServer: {
    proxy: {
      "/api": {
        ws: true,
        changeOrigin: true,
        target: "https://justradeuat.jusdascm.com",
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  }
};
