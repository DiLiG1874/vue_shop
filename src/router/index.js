import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../components/Login.vue'
import Home from '../components/Home.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    { path: '/', redirect: '/login' },
    { path: '/login', component: Login },
    { path: '/home', component: Home },
  ],
})

// 挂载路由导航守卫
router,
  router.beforeEach((to, from, next) => {
    // to 表示将要访问的路径
    // from 表示从哪个路径跳转而来
    // next 是一个函数，next()表示放行,next('/login')强制跳转

    if (to.path === '/login') return next()
    // 获取 token
    const tokenStr = window.sessionStorage.getItem('token')
    if (!tokenStr) return next('/login')
    next()
  })

export default router
