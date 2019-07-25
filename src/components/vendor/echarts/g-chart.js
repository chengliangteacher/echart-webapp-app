//=====================================引入全部====================================//
import * as Echarts from "echarts";
// import china from "echarts/map/json/china.json"
//=====================================按需引入====================================//
// import  Echarts from "echarts/lib/echarts.js"
// import 'echarts/lib/chart/line'

import limitFrequence from "@/directive/limit-frequency";
const Events = [
    "click",
    "dblclick",
    "mouseover",
    "mouseout",
    "mousedown",
    "mouseup",
    "globalout",
    "legendselectchanged",
    "legendselected",
    "legendunselected",
    "datazoom",
    "datarangeselected",
    "timelinechanged",
    "timelineplaychanged",
    "restore",
    "dataviewchanged",
    "magictypechanged",
    "geoselectchanged",
    "geoselected",
    "geounselected",
    "pieselectchanged",
    "pieselected",
    "pieunselected",
    "mapselectchanged",
    "mapselected",
    "mapunselected",
    "axisareaselected",
    "brush",
    "brushselected"
];

require("echarts/map/js/china.js");

export default {
    props: {
        //图表容器样式默认百分之百
        styles: {
            type: Object,
            default() {
                return {
                    width: "100%",
                    height: "100%"
                };
            }
        },
        theme: {
            type: String
        },
        //devicePixelRatio设备像素比,renderer渲染器(canvas，svg),width,height
        initOpts: {
            type: Object
        },
        //echarts相关设置
        options: {
            type: Object,
            require: true
        },
        //是否有加载圈
        isLoading: {
            type: Boolean
        },
        //加载圈样式
        loadingOpts: {
            type: Object
        },
        //绑定事件的查询方法
        eventQuery: {
            type: [Object, String]
        }
    },
    data() {
        return {
            wraper: null, //当前包裹框
            instance: null, //echarts实例
            Echarts: Echarts
        };
    },
    created() {
        window.onresize = limitFrequence.throttle(() => {
            if (this.instance) {
                // console.log("resize")
                this.instance.resize();
            }
        }, 200);
        this.$emit("charts", Echarts);
    },
    mounted() {
        this.wraper = this.$el;
        this.instance = Echarts.init(this.wraper, this.theme, this.initOpts);
        this.$emit("ready", this.instance, Echarts);
        this.instance.setOption(this.options);
        this.isLoading
            ? this.instance.showLoading("default", this.loadingOpts)
            : this.instance.hideLoading("default", this.loadingOpts);
        this.initEvents();
    },
    methods: {
        //初始化所有事件
        initEvents() {
            Events.forEach(event => {
                let query = this.eventQuery ? this.eventQuery[event] : "";
                if (this.instance) {
                    if (query) {
                        this.instance.on(event, query, e => {
                            this.$emit(event, this.instance, query, e);
                        });
                    } else {
                        this.instance.on(event, e => {
                            this.$emit(event, this.instance, query, e);
                        });
                    }
                }
            });
        },
        //动态挂载地图
        registMap() {}
    },
    watch: {
        options: {
            handler() {
                if (this.options.clear) {
                    this.instance.clear();
                }
                this.instance.setOption(this.options);
            },
            deep: true
        },
        isLoading() {
            this.isLoading
                ? this.instance.showLoading("default", this.loadingOpts)
                : this.instance.hideLoading("default", this.loadingOpts);
        }
    },
    render(h) {
        return h("div", {
            style: this.styles
        });
    }
};
