import Vue from 'vue'
import VueRouter from 'vue-router'
import firstpage from '../components/FirstPage.vue'
import login from '../components/Login.vue'
import kanban from '../components/KanBan.vue'
import chat from '../components/Chat.vue'
import ranjin from '../components/RanJin.vue'
import register from '../components/Register.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  // history模式url里没有#，要注意页面跳转用this.$router.push()方法，否则打出来的dist文件找不到文件，会报404
  mode: 'history',
  routes: [
    { path: '/', redirect: '/firstpage' },
    { path: '/firstpage', component: firstpage },
    { path: '/login', component: login },
    { path: '/kanban', component: kanban },
    { path: '/chat', component: chat },
    { path: '/ranjin', component: ranjin },
    { path: '/register', component: register }
  ],
  scrollBehavior (to, from, savedPosition) {
    // 这个是为了每次跳转都能跳回页面顶部
    return { x: 0, y: 0 }
  }
})

export default router

// 路由文件，首先引入了被路由组件，当路由地址为‘/’时直接给跳转到‘/firstpage’里，而'.firstpage'又对应firstpage组件，
// 即用FirstPage.vue组件替换Index.vue中间的router-view，其他路由同理
