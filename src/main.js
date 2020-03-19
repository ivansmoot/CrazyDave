import 'bootstrap/dist/css/bootstrap.min.css'
import Vue from 'vue'
import ECharts from 'vue-echarts'
import 'echarts/lib/chart/line'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import index from './components/Index.vue'
import router from './router/index.js'
Vue.component('v-chart', ECharts)

Vue.config.productionTip = false
Vue.use(ElementUI)

new Vue({
  router,
  render: h => h(index)
}).$mount('#app')
