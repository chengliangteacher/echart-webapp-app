/*
 * http 请求详细配置
 * 认证方式采用jwt
 *
 *
 * @请求拦截钩子
 * 1.全局请求设置带上cookie
 * 2.超时时间统一设置
 * 3.设置请求头
 *
 * @响应拦截钩子
 * 1.http状态码200
 *     1.code 0 代表请求成功
 *     2.code 403 代表登陆过期
 *     3.code
 * 2.http状态吗不为200
 *
 */
import axios from "axios";
import router from "../router";
import { BaseConfig } from "@/config.default"
import mock from "@/mock/development"

if (process.env.NODE_ENV === "development" && BaseConfig.enableMock) {
    mock(axios)
}
const axiosInstance = axios.create({
    baseURL: BaseConfig.devUrl
});//修复mock触发两次的问题

axiosInstance.defaults.withCredentials = true; //允许携带cookie
axiosInstance.defaults.timeout = 25000; //超时时间
if (process.env.NODE_ENV === "development") {
    axiosInstance.defaults.baseURL = BaseConfig.devUrl; //
} else {
    axiosInstance.defaults.baseURL = BaseConfig.proUrl; 
}

export default {
    install: function(Vue) {
        //===============================axiosInstance请求钩子==========================================//
        axiosInstance.interceptors.request.use(
            config => {
                return config;
            },
            err => {
                return Promise.reject(err);
            }
        );
        //===============================axiosInstance响应钩子=======================================//
        axiosInstance.interceptors.response.use(
            res => {
                if (res.data.code === undefined) {
                    return res.data;
                }
                return res.data;
            },
            err => {
                Vue.prototype.$message.error("系统开小差了!");
                return Promise.reject(err);
            }
        );
        Vue.prototype.axios = axiosInstance;
    },
    axios: axiosInstance
};
