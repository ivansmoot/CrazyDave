
import '../public/bootstrap-4.3.1/dist/css/bootstrap.css'
import Vue from 'vue'
// import '../public/bootstrap-4.3.1/site/docs/4.3/examples/floating-labels/floating-labels.css'
// import '../public/bootstrap-4.3.1/site/docs/4.3/examples/sign-in/signin.css'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import index from './components/Index.vue'
import router from './router/index.js'
import login from './components/Login.vue'

Vue.config.productionTip = false
Vue.use(ElementUI)

new Vue({
  router,
  render: h => h(index)
}).$mount('#app')

new Vue({
  render: h => h(login)
}).$mount('#app2')
