// import Chance from "chance";
// const chance = new Chance();

const utils = {
    /* 
        @description  包装返回对象，支持传入随机值导致报错
        @autor        shuxiaokai
        @create       2019-04-16 16:39"
        @params       obj<Object> 返回值
        @params       options<Object>   p: 0-1 报错概率   
        @return       
    */
    packMsg(obj = {}, options = { p: 0 }) {
        const { p } = options;
        const random = Math.random();
        if (random >= p) {
            return {
                code: 200,
                msg: "操作成功",
                url: obj.url,
                title: obj.title,
                data: obj.data
            };
        } else {
            return {
                code: 500,
                msg: "操作失败",
                data: {}
            };
        }
    },

    /* 
        @description  循环随机生成数据
        @autor        shuxiaokai
        @create       2019-04-25 10:57"
        @params       rule 生成规则
        @params       times 重复次数
        @return       
    */
    repeat(rule, times) {
        if (
            Array.isArray(rule) ||
            Object.prototype.toString.call({}).slice(1, 7) !== "object"
        ) {
            throw new Error("传入一个对象");
        }

        const result = [];
        for (let i = 0; i < times; i++) {
            result.push(rule);
        }
        return result;
    }
};

export default utils;
