import Vue from "vue";
import Vuex from "vuex";
import layout from "./layout/layout"
import testData from "./test-data/testdata"
import snippetData from "./snippet/snippet"
Vue.use(Vuex);

const store = new Vuex.Store({
    state: {

    },
    mutations: {
        
    },
    modules: {
        layout,
    },
    strict: false
});
if (process.env.NODE_ENV === "development") {
    store.registerModule("testData", testData); //mock数据
    store.registerModule("snippetData", snippetData); //代码片段
}
// store.registerModule("testData", testData);


export default store;
