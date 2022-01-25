import VueRouter from 'vue-router'
import Vue from "vue";
import Login from "../components/Login";
import creat from "../components/Creat";
import detail from "../components/detail";
import index from "../components/Index";
import zhanshi from "../components/zhanshi";
import ShowCommodity from "../components/ShowCommodity";
import Forget from "../components/Forget";
import usermessage from "../components/usermessage";


Vue.use(VueRouter)
const router = new VueRouter({
    mode:'history',
    routes: [
        { path: '/', redirect: '/index' },
        { path: '/login', component: Login },
        { path: '/creat', component: creat },
        { path: '/detail/id=:id', component: detail },
        { path: '/index', component: index },
        { path: '/zhanshi', component: zhanshi },
        { path: '/show/id=:seckillId', component: ShowCommodity },
        { path: '/forget', component: Forget },
        { path: '/usermessage/user', component: usermessage },
    ]
})


// router.beforeEach((to, from, next) => {
//     /**
//      * to: 将要访问的路径
//      * from: 代表从哪个路径跳转而来
//      * next：一个函数，表示放行
//      * */
//     if (to.path === '/login' || to.path === '/index' || to.path === '/creat' || to.path === '/detail' || to.path === '/zhanshi' ) return next()
//     let token = window.sessionStorage.getItem('token')
//     if (!token) return next('/login')
//     next()
// })
//
export default router
