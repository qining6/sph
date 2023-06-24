const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  //关闭eslint
  // lintOnSave: process.env.NODE_ENV !== 'production',
  lintOnSave:false,

  devServer: {
    proxy: {
      '/api': {
        target: 'http://39.98.123.211:8510',
        // pathRewrite: { '^/api': '' },
      },
    },
  },
})
