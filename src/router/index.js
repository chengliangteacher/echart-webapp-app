import Vue from "vue"
import Router from "vue-router"
import NProgress from "nprogress"
import "nprogress/nprogress.css"
//=====================================注册登陆页面====================================//
import login from "@/pages/login/login"
import layout from "../pages/layout/index"
//=====================================业务逻辑页面====================================//
import a from "./pages/a"


Vue.use(Router)

const router = new Router({
    // mode: "history",
    routes: [
        {
            path: "/",
            redirect: "/v1"
        },
        {
            path: "/login",
            name: "login",
            meta: {
                testInfo: {
                    desc: "登陆页面",
                    key: "login",
                    trigger: "login"
                }
            },
            component: login
        },
        {
            path: "/v1",
            component: layout,
            children: [
                ...a
            ]
        }
    ]
})



router.beforeEach(async(to, from, next) => {
    NProgress.start()
    next()
})

router.afterEach(() => {
    NProgress.done() // 页面顶部的加载条
})

export default router
