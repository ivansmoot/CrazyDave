import Vue from 'vue'
import VueRouter from 'vue-router'
import firstpage from '../components/FirstPage.vue'
import login from '../components/Login.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', redirect: '/firstpage' },
    { path: '/firstpage', component: firstpage },
    { path: '/login', component: login }
  ]
})

export default router
