/* 
    @description  抽样人员分布
    @autor        shuxiaokai
    @create       2019-04-16 16:22"
    @params       
    @return       
*/
import Mock from "../../mockjs.js";
import utils from "../../utils/utils";
const { packMsg } = utils;
const Random = Mock.Random

// const Random = Mock.Random;
// const chance = new Chance();

/* 
    @description  抽样时间分布
    @autor        shuxiaokai
    @create       2019-04-16 16:25"
    @params       
    @return       
*/
const k1 = packMsg({
    title: "抽样时间分布",
    url: "/dynamic/sampling/map/person/batch",
    data: packMsg(
        Mock.mock({
            categoryName: "@cClass",
            balanceName: "@balanceLevel",
            lat: "@lat",
            lng: "@lng",
            boolean: Random.boolean()
        })
    )
});

// console.log(k1, "kkkkk")

export default {
    k1
};
