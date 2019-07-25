import Vue from "vue";

import computed from "./computed";
import methods from "./methods";
import props from "./props";
import filters from "./filters";

export default (function() {
    Vue.mixin({
        filters,
        props,
        computed,
        methods,
    });
})();
