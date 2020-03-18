import Vue from 'vue'
import VueRouter from 'vue-router'
import firstpage from '../components/FirstPage.vue'
import login from '../components/Login.vue'
import kanban from '../components/KanBan.vue'
import chat from '../components/Chat.vue'
import ranjin from '../components/RanJin.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', redirect: '/firstpage' },
    { path: '/firstpage', component: firstpage },
    { path: '/login', component: login },
    { path: '/kanban', component: kanban },
    { path: '/chat', component: chat },
    { path: '/ranjin', component: ranjin }
  ]
})

export default router
