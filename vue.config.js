module.exports = {
  devServer: {
    proxy: {
      "^/api": {
        target: process.env.BASE_URL,
        changeOrigin: true,
        pathRewrite: { "^/api": "" },
      },
    },
  },
};
