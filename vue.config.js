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
  }
};
