import Vue from "vue"
import App from "./App.vue"
import router from "./router"
import store from "./store"
import { BaseConfig } from "@/config.default.js"
import "./directive"
import "./mixin"
import "./components/index"

//========================第三方模块引入=============================//
import "@/assert/css/animate.css" //引入动画库
import MintUI from "mint-ui"
import "mint-ui/lib/style.css"
import axios from "./api/api"

Vue.use(axios)
Vue.use(MintUI)

//=================================================================//
Vue.config.productionTip = true

new Vue({
    data: {
        VUE_BASE_CONFIG:
            process.env.NODE_ENV === "development" ? BaseConfig : {}
    },
    store,
    router,
    render: h => h(App)
}).$mount("#app")

// Vue.config.errorHandler = (err, vm, info) => {
//     Vue.nextTick(() => {
//         console.log(err)
//         console.log(vm)
//         console.log(info)
//     })
// }
