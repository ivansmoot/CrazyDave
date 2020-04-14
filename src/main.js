import 'bootstrap/dist/css/bootstrap.min.css'
import Vue from 'vue'
import ECharts from 'vue-echarts'
import 'echarts/lib/chart/line'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import index from './components/Index.vue'
import router from './router/index.js'
import store from './store'

Vue.component('v-chart', ECharts)
Vue.use(ElementUI)

new Vue({
  router,
  store,
  render: h => h(index)
}).$mount('#app')

// main.js是项目的入口文件，从这里引入了各个组件，最后给app绑定了index，
// 这个index就是上面import进来的Index.vue组件
