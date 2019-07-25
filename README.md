# ui规范
  1. 颜色

| 颜色值(参考)   | 名称   | scss值   | 分类   | 意义   | 
|:----:|:----:|:----|:----|:----|:----|
| 主题色   |    |    |    |    | 
| 主题色   | 主题色   | $theme-color   | 主题色   |    | 
| 辅助色   |    |    |    |    | 
| 警告色   | 警告色   | $warning-color   | 辅助色   | 除了主色外的场景色，需要在不同的场景中使用（例如危险色表示危险的操作）   | 
| 成功色   | 成功色   | $success-color   | 辅助色   |    | 
| 错误色   | 错误色   | $error-color   | 辅助色   |    | 
| 信息色   | 信息色   | $info-color   | 辅助色   |    | 
|  白色~黑色(中性色)   |    |    |    |    | 
| 颜色值(参考)   | 名称   | scss值   | 分类   | 意义   | 
| 黑色   | 黑色   | $black   | 中性色   | 中性色用于文本、背景和边框颜色。通过运用不同的中性色，来表现层次结构   | 
| 灰-900   | 灰-900   | $gray-900   | 中性色   |    | 
| 灰-800   | 灰-800   | $gray-800   | 中性色   |    | 
| 灰-700   | 灰-700   | $gray-700   | 中性色   |    | 
| 灰-600   | 灰-600   | $gray-600   | 中性色   |    | 
| 灰-500   | 灰-500   | $gray-500   | 中性色   |    | 
| 灰-400   | 灰-400   | $gray-400   | 中性色   |    | 
| 灰-300   | 灰-300   | $gray-300   | 中性色   |    | 
| 灰-200   | 灰-200   | $gray-200   | 中性色   |    | 
| 灰-100   | 灰-100   | $gray-100   | 中性色   |    | 
| 白色   | 白色   | $white   | 中性色   |    | 
| 文字，边框，背景，卡片   |    |    |    |    | 
| 颜色值(参考) | 名称 | scss值 | 分类 | 意义 | 
| 主要文字(默认)   |    | $gray-800   |    |    | 
| 常规文字   |    | $gray-600   |    |    | 
| 次要文字   |    | $gray-300   |    |    | 
| 边框颜色   |    | $gray-300   |    |    | 
| 背景   |    | $gray-100   |    |    | 

注：所有hover效果均为当前颜色与白色混合20%



---





  2. 文字
| 名称   | 大小   | 颜色   | scss   | 意义   | 
|:----|:----|:----|:----|:----|
| 辅助文字   | 12px   | $gray-800   | f-xs   |    | 
| 正文(小)   | 13px   | $gray-800   | f-sm   |    | 
| 正文   | 14px   | $gray-800   | f-base    |    | 
| 小标题   | 16px   | $gray-800   | f-bg  或   h-sm   |    | 
| 标题   | 18px   | $gray-800   | f-lg   或   h-base   |    | 
| 大标题   | 20px   | $gray-800   | f-xl   或   h-lg   |    | 


  3. 边框
| 名称   | 颜色   | css(类引用)   |    | 
|:----|:----|:----|:----|
| 1px边框   | $gray-600   | border   |    | 
| 上边框   | $gray-600   | border-top   |    | 
| 左边框   | $gray-600   | border-left   |    | 
| 右边框   | $gray-600   | border-right   |    | 
| 下边框   | $gray-600   | border-bottom   |    | 
| 2px边框   | $gray-600   | border2   |    | 
| 2px上边框 | $gray-600 | border2-top |    | 
| 2px左边框 | $gray-600 | border2-left |    | 
| 2px右边框 | $gray-600 | border2-right |    | 
| 2px下边框 | $gray-600 | border2-bottom |    | 


  4. 边距

边距默认为12的倍数
| 名称 | css(类引用) | 值 | 
|:----:|:----:|:----:|
| 左外边距 | ml-1  ~  ml-5 | 12px ~ 60px | 
| 右外边距 | mr-1  ~  mr-5 | 12px ~ 60px | 
| 上外边距 | mt-1  ~  mt-5 | 12px ~ 60px | 
| 下外边距 | mb-1 ~  mb-5 | 12px ~ 60px | 
| 左右外边距 | mx-1 ~  mx-5 | 12px ~ 60px | 
| 左内边距 | ml-1  ~  ml-5 | 12px ~ 60px | 
| 右内边距 | pr-1  ~  pr-5 | 12px ~ 60px | 
| 上内边距 | pt-1  ~  pt-5 | 12px ~ 60px | 
| 下内边距 | pb-1 ~  pb-5 | 12px ~ 60px | 
| 左右内边距 | px-1 ~  px-5 | 12px ~ 60px | 
| 上下内边距 | py-1  ~ py-5 | 12px ~ 60px | 

## 1.5.层级(z-index)
| 名称   | scss   | 值   | 
|:----|:----|:----:|:----|
| 模态框   | $zindex-model     | 9999   | 
| 遮罩   | $zindex-shadow   | 9998   | 

## 1.6.图片，Icon,
1.开发之前，尽量获取所有图片和Icon资源
2.若时间比较赶，ui无法给出所有图片和Icon，可以先使用部分mock图片
3.所有开发尽量采用Icon形式(省时省力), 若必要使用图片，图片命名按照 
组件名称 + 图片名称形式
例如： ![图片](https://uploader.shimo.im/f/qjF9wqLOWfg5poSc.png!thumbnail) 图片命名为    c_header.png
 4.所有图片均为ui切好给出，前端不使用任何工具下载图片，开发之前ui需要给出所需图片，蓝湖之类写作软件生成切图不准确，不完善，增加沟通成本

# 变量命名注释风格规范
## .vue文件命名
针对与每个业务模块的开发，我们摸索出了一套比较方便，并且上手很快的文件命名方式。
![图片](https://uploader.shimo.im/f/3g2DKX8DY0kdRgxn.png!thumbnail)![图片](https://uploader.shimo.im/f/fyztYiwEucoE57tc.png!thumbnail)
  1.  所有模块采用a,b,c,d命名，若26个英文字母全部用完则采用aa,bb,cc,dd命名方式
  2. 对于典型的业务场景来说，我们的业务一般分为 查询展示  新增  更新  弹窗 所以我们的文件如下方式命名 

查询展示(a.vue)      新增(a-add.vue)       更新(a.edit.vue)       弹窗(a-model.vue)
  3. ![图片](https://uploader.shimo.im/f/S4gASY5Bwh88NWvM.png!thumbnail)![图片](https://uploader.shimo.im/f/11yHIdBNNFgVU9yI.png!thumbnail)

         对于公共组件以g-开头，引用的时候直接使用不需要再import

## css相关规范
1.禁止使用行内样式
2.禁止直接使用z-index
3.css变量命名禁止出现驼峰(可能存在大小写不敏感)
4.scss嵌套禁止超过3层，scss名称可以长一点，尽量表达清晰的意思

---

## vue文件与js文件命名规范
![图片](https://uploader.shimo.im/f/olzSFJHiTZkfeG0H.png!thumbnail)  不推荐         ![图片](https://uploader.shimo.im/f/BEP4F2MnP8IA3LBW.png!thumbnail)推荐


---

搜索框命名
![图片](https://uploader.shimo.im/f/2jMqBZTJm0cwbGM5.png!thumbnail)
```
searchForm: {
    companyName: "", //-----------------企业名称
    licenseNumber: "", //---------------统一信用代码
    legalRep: "" //---------------------企业法人
}, 
```

table数据命名
```
![图片](https://uploader.shimo.im/f/QwndvykDTNYRrraD.png!thumbnail)
tableInfo: [], //table数据命名
```

表单提交

![图片](https://uploader.shimo.im/f/PUJE13joGlIlHBn8.png!thumbnail)
```
formInfo: {
  a: 1,
  b: 2
}
```

模态框弹窗

![图片](https://uploader.shimo.im/f/DtqRo8Xs9743TLzl.png!thumbnail)
```
modelInfo: {
  x: 1,
  y: 2
}
```

注意: 对于新增和编辑页面，整个页面有很大一部分是相同的，在一般情况下我们建议复用同一组件



---
## 注释风格
通过我们长时间开发和学习，总结了一套比较好看的代码注释风格
    * 单行注释

![图片](https://uploader.shimo.im/f/ndNvyAbE2Us0ihPc.png!thumbnail)
    * 分隔注释

![图片](https://uploader.shimo.im/f/DgiC5SUJCY48P7IF.png!thumbnail)
    * 函数注释

![图片](https://uploader.shimo.im/f/t5fIsBn7MhgUrlKn.png!thumbnail)
    * 文件初始化注释

![图片](https://uploader.shimo.im/f/9pfW97WJXhEsXO3Y.png!thumbnail)

# eslint规范
相关参考：[https://cn.eslint.org/docs/rules/](https://cn.eslint.org/docs/rules/)
主要限制： 1.我们限制默认缩进为空格，长度为4格子。2.强制使用双引号。其余规则大部分按照官方推荐规则处理。
我们提供公共vscode配置：
GitHub Token: e370d2eda76138acc1e9e7dbb6433f7bebdee6f3
GitHub Gist: b94d4fc9855c2f5ff2dd986aac90f4b0 
  我们公共vscode会随时更新
常见错误：
缩进错误
![图片](https://uploader.shimo.im/f/DbiWBwadlTklAwgs.gif)

出现eslint错误
![图片](https://uploader.shimo.im/f/iSy8vMiZKPEUFc0x.png!thumbnail)


# 项目目录结构
## 文档目录
```




│  .gitignore                     //不加入代码仓库的文件   
│  babel.config.js                //存放Babel相关配置(一般不处理)
│  cypress.json                   //端对端测试文件
│  package-lock.json              //package-lock包(包安装出错删除它重装)
│  package.json                   //开发相关依赖
│  README.md                      //readme文档
│  vue.config.js                  //扩展cli打包功能
│  
├─public                          //该目录文件不会被webpack处理
│  │  favicon.png                 //网页小图标
│  │  index.html                  //html主文件入口(更新icon需要更新该文件)
│  │  
│  ├─css                          //存放本地css(上线，所有公共css均走cdn)
│  │      index.css
│  │      
│  ├─fonts                        //本地字体文件(上线，所有字体文件均走cdn)
│  │      element-icons.ttf
│  │      element-icons.woff
│  │      
│  └─img                          //存放本地图片(弃用，文件推荐放入assert)
│          a.jpg                  //assert目录文件会经过webpack打包
│          b.jpg 
├─src                             //开发时所有文件全部存放在这里
│  │  App.vue                     //vue入口文件
│  │  main.js                     //js入口文件
│  │  
│  ├─api
│  │      api.js                  //全局请求拦截，mock数据接入
│  │      
│  ├─components                   //全局公共组件
│  │  │  index.js
│  │  │  
│  │  ├─common                    //公用组件s-开头，引入自动变为s-**
│  │  │      g-card.vue
│  │  │      g-span.vue
│  │  │      g-table.vue
│  │  │      
│  │  └─vendor                    //第三方公共组件(echarts,富文本)
│  │      ├─echarts
│  │      │      g-chart.js 
│  ├─directive                    //全局指令
│  │      bubble.js
│  │      copy.js
│  │      drag-tabs.js
│  │      drag.js
│  │      focus.js
│  │      index.js
│  │      limit-frequency.js
│  │      number-increase.js
│  │      
│  ├─lib                           //全局工具函数(lodash)
│  │      utils.js
│  │      
│  ├─mixin                         //全局混入 
│  │  │  index.js       参考:https://cn.vuejs.org/v2/guide/mixins.html
│  │  │  
│  │  ├─computed
│  │  │      index.js
│  │  │      
│  │  ├─filters         参考：基础时间过滤
│  │  │      format_time.js
│  │  │      index.js
│  │  │      select.color.js
│  │  │      
│  │  ├─methods                     //全局方法
│  │  │      index.js
│  │  │      
│  │  └─props                       //全局props
│  │          index.js
│  │          
│  ├─pages                          //所有页面
│  │  ├─enlarge                     //扩展页面(通知之类，与业务无关页面)
│  │  │  └─notice
│  │  │      │  notice.vue          //更新日志
│  │  │              
│  │  ├─layout                      //布局页面
│  │  │  │  index.vue
│  │  │  │  
│  │  │  ├─banner                    //banner布局
│  │  │  │      banner.vue
│  │  │  │      item.vue
│  │  │  │      
│  │  │  ├─bread                     //面包屑导航
│  │  │  │      bread.vue
│  │  │  │      
│  │  │  ├─content                    //主体内容区域
│  │  │  │      content.vue
│  │  │  │      
│  │  │  ├─error                      //错误界面，包括404和无权限等
│  │  │  │      404.vue
│  │  │  │      
│  │  │  ├─header                     //头部布局
│  │  │  │      header.vue
│  │  │  │      
│  │  │  └─tabs                        //多标签
│  │  │          tabs.vue
│  │  │          
│  │  ├─login                          //登陆和注册页面
│  │  │      register.login
│  │  │      login.vue
│  │  │      
│  │  └─model                          //所有开发文件
│  │      ├─a
│  │      │      a.vue
│  │      │      
│  │      └─test                       //单独用于测试的一个页面
│  │              test.vue
│  │              
│  ├─router                            //路由配置页面
│  │  │  index.js                      //index.js会引入一些无权限页面
│  │  │  
│  │  ├─enlarge                        //扩展页面，与业务系统无关
│  │  │      notice.js
│  │  │      
│  │  └─pages                          //业务相关路由
│  │          a.js
│  ├─scss                              //scss相关配置
│  │  │  index.scss
│  │  │  
│  │  ├─global
│  │  │      _global.scss               //全局reset，处理部分默认样式
│  │  │      _mend.scss                 //全局重写部分第三方ui库样式
│  │  │      
│  │  ├─helpers                         //全局函数和mixin
│  │  │      _functions.scss
│  │  │      _mixin.scss
│  │  │      
│  │  ├─layout                           //全局布局文件(弃用)
│  │  │      _banner.scss
│  │  │      _header.scss
│  │  │      _index.scss
│  │  │      
│  │  ├─theme                             //全局主题文件(弃用)
│  │  │      _index.scss
│  │  │      _theme.scss
│  │  │      
│  │  ├─utils                              //全局工具类(非常好用)
│  │  │      _utils.scss
│  │  │      
│  │  └─variables                          //全局变量包括颜色文字等
│  │          _variables.scss
│  │          
│  └─store                
│      │  index.js
│      │  
│      ├─layout                             //与布局相关的一些变量
│      │      layout.js
│      │      
│      └─test-data                         //测试工具相关数据(正式环境无效)
│          │  testdata.js
│          │  
│          └─mocks
│                  b.js
│                  e-add.js
│                  index.js
│                  register.js
│          
└─tests
    ├─e2e                                    //端对端测试
    │  │  .eslintrc.js
    │  │  
    │  ├─plugins
    │  │      index.js
    │  │      
    │  ├─specs
    │  │      test.js
    │  │      
    │  └─support
    │          commands.js
    │          index.js
    │          
    └─unit                                    //单元测试
            .eslintrc.js
            example.spec.js
```
            



# 界面规范
## 场景一(搜索列表)






