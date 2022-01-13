import VueRouter from 'vue-router'
import Vue from "vue";
import Login from "@/components/Login";

Vue.use(VueRouter)
const router = new VueRouter({
    routes: [
        { path: '/', redirect: '/index' },
        { path: '/login', component: Login },
    ]
})
router.beforeEach((to, from, next) => {
    /**
     * to: 将要访问的路径
     * from: 代表从哪个路径跳转而来
     * next：一个函数，表示放行
     * */
    if (to.path === '/login' ) return next()
    let token = window.sessionStorage.getItem('token')
    if (!token) return next('/login')
    next()
})

export default router
