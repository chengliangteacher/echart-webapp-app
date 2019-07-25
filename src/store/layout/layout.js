import api from "@/api/api"
const axios = api.axios

export default {
    state: {
        role: [], //用户权限
        banner: [
            {
                name: "数据配置", 
                path: "/v1/test/config",
                icon: "el-icon-setting",
                isLink: false
            },
            {
                name: "展示界面",
                path: "/v1/aaa",
                icon: "el-icon-sunny",
                isLink: false,
                children: [
                    {
                        name: "搜索加表格",
                        path: "/v1/test/a",
                        icon: "el-icon-sunny",
                        isLink: false,
                    },
                    {
                        name: "service worker",
                        path: "/v1/test/b",
                        icon: "el-icon-sunny",
                        isLink: false,
                    },
                ]
            },
            {
                name: "外连接",
                path: "https://www.baidu.com",
                icon: "el-icon-setting",
                isLink: true
            },
        ],
        isExpandBanner: false, //是否折叠左侧banner
        isExpandMobileBanner: false, //是否折叠左侧移动端banner
        tabs: [], 
        isNotic: false, //是否存在更新消息
    },
    mutations: {
        toggleBanner(state) {
            state.isExpandBanner = !state.isExpandBanner;
        },
        toggleMobileBanner(state) {
            state.isExpandMobileBanner = !state.isExpandMobileBanner;
        },
        closeMobileBanner(state) {
            state.isExpandMobileBanner = false;
        },
        //=====================================新增标签====================================//
        addTabs(state, payload) {
            if (payload.path.includes("/v1")) {
                if (state.tabs.some(tab => tab.path === payload.path)) {
                    return;
                }
                state.tabs.push(payload);
            }
            localStorage.setItem("layout-tabs", JSON.stringify(state.tabs))
        },
        //=====================================关闭标签====================================//
        deleteTab(state, index) {
            state.tabs.splice(index, 1);
            localStorage.setItem("layout-tabs", JSON.stringify(state.tabs))
        },
        //=====================================关闭多个标签====================================//
        deleteTabs(state, payload) {
            state.tabs.splice(payload.start, payload.num);
            localStorage.setItem("layout-tabs", JSON.stringify(state.tabs))
        },
        //=====================================清空标签====================================//
        clearTabs(state) {
            state.tabs = [];
            localStorage.setItem("layout-tabs", JSON.stringify(state.tabs))
        },
        //=====================================获取用户权限====================================//
        changeRole(state, payload) {
            state.role = payload;
        },
        //=====================================更新用户菜单====================================//
        changePermission(state, payload) {
            state.banner = payload;
        }
    },
    actions: {
        getPermission({ commit }) {
            return new Promise((resolve, reject) => {
                if (sessionStorage.getItem("permission")) {
                    commit("changePermission", JSON.parse(sessionStorage.getItem("permission")));
                    resolve();
                } else {
                    axios.get("/role/userRoles").then(res => {
                        const roles = res.content.map(val => val.roleCode);
                        const banner = [];
                        commit("changeRole", res.content.map(val => val.roleCode));
                        if (roles.some(val => val === "sys-admin-0")) {
                            banner.push({
                                name: "企业审核",
                                path: "/v1/b",
                                icon: "iconbaogao",
                                isLink: false
                            })
                        }
                        if (roles.some(val => val === "sys-guest-0")) {
                            [{
                                name: "抽检情况",
                                path: "/v1/d",
                                icon: "iconbaogao",
                                isLink: false
                            },
                            {
                                name: "异议申请",
                                path: "/v1/e",
                                icon: "iconbaogao",
                                isLink: false
                            },
                            {
                                name: "核查处置",
                                path: "/v1/a",
                                icon: "iconbaogao",
                                isLink: false
                            }].forEach(val => {
                                banner.push(val)                        
                            })
                        }
                        sessionStorage.setItem("isLogin", true)
                        sessionStorage.setItem("permission", JSON.stringify(banner));
                        commit("changePermission", banner)
                        resolve();
                    }).catch(err => {
                        console.error(err);
                        reject(err)
                    });                            
                }
            })
        }
    }
};
