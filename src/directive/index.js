import Vue from "vue"

import focus from "./focus"
import drag from "./drag"
// import dragTabs from "./drag-tabs"
import inc from "./number-increase"
import copy from "./copy"
import bubble from "./bubble"



export default (function() {
    Vue.directive("focus", focus);
    Vue.directive("inc", inc);
    Vue.directive("drag", drag);
    // Vue.directive("drag-tabs", dragTabs);
    Vue.directive("copy", copy);
    Vue.directive("bubble", bubble);
})();


