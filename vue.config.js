const path = require("path");

module.exports = {
  
    //=====================================css相关配置====================================//
    css: {
        loaderOptions: {
            css: {// 这里的选项会传递给 css-loader

            },
            sass: {
                data: `@import "@/scss/index.scss";`
            }
        },
        sourceMap: false,
        extract: true
    },
    //=====================================扩展webpack配置====================================//
    configureWebpack: {
        externals: {
            // vue: "Vue",
            // "element-ui": "ELEMENT",
        },
        resolve: {
            alias: {
                "@": path.resolve(__dirname, "src/"),
                "~": path.resolve(__dirname, "")
            }
        },
    },
    //=====================================代理服务器配置====================================//
    devServer: {
        proxy: {
            "/": {
                target: "http://shgz.xrdev.cn",
                // target: "",
                ws: false,
                changeOrigin: true
            },
        },
        before(app) {
            app.get("/pt/test", (req, res) => {
                res.json({ x: 222 })
            })
        }
    },
    //=====================================eslint配置====================================//
    lintOnSave: "error", //未通过eslint 禁止代码提交
    //=====================================打包上线配置====================================//
    publicPath: "/",
    outputDir: "./app", //输出文件类型
    productionSourceMap: false, //打包时候js是否添加sourceMap
};
