/* 
    @description  抽样人员分布
    @autor        shuxiaokai
    @create       2019-04-16 16:22"
    @params       
    @return       
*/
import Mock from "../../mockjs.js";
import utils from "../../utils/utils";
const packMsg = utils.packMsg;

/* 
    @description  在线抽样人员地图上今日抽样详情
    @autor        shuxiaokai
    @create       2019-04-16 16:25"
    @params       
    @return       
*/
const a1 = packMsg({
    title: "在线抽样人员地图上今日抽样详情",
    url: "/dynamic/sampling/map/person/batch",
    data: Mock.mock({
        "uuid|0-5": "aaa",
        longitude: "@lat",
        latitude: "@lng"
    })
});

/* 
    @description  抽样人员登陆、在线总数
    @autor        shuxiaokai
    @create       2019-04-16 16:25"
    @params       
    @return       
*/
const a2 = packMsg({
    title: "抽样人员登陆、在线总数",
    url: "/dynamic/sampling/person",
    data: packMsg(
        Mock.mock({
            longitude: "@lat",
            latitude: "@lng"
        })
    )
});

/* 
    @description  抽样人员登陆、在线总数
    @autor        shuxiaokai
    @create       2019-04-16 16:25"
    @params       
    @return       
*/
const a3 = packMsg({
    title: "抽样各环节抽检分布（业态分布）",
    url: "/dynamic/sampling/person",
    data: packMsg(
        Mock.mock({
            linkName: "环节",
            batchCounts: "@lng"
        })
    )
});

export default {
    a1,
    a2,
    a3
};
