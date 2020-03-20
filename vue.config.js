module.exports = {
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
  transpileDependencies: [ // 这是Vue-echarts官方文档给出的Webpack3配置需要，否则Vue-echarts没法用
    'vue-echarts',
    'resize-detector'
  ]
}