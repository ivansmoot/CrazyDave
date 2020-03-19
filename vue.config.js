module.exports = {
  // 选项...
  // devtool: 'eval-source-map',//开发调试
  devServer: {
    proxy:{
      '/apis': {//代理api
        target: "http://127.0.0.1:3000",//服务器api地址
        changeOrigin: true,//是否跨域
        pathRewrite: {//重写路径
          "^/apis": ''
        }
      }
    }
  },
  transpileDependencies: [
    'vue-echarts',
    'resize-detector'
  ]
}