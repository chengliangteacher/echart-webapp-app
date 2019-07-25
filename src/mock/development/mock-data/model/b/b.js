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
    @description  重点关注地区级联选择
    @autor        shuxiaokai
    @create       2019-04-16 16:25"
    @params       
    @return       
*/
const b1 = packMsg({
    url: "/monitor/enterprise/level/info",
    title: "重点关注地区级联选择",
    data: Mock.mock([
        {
            label: "学校",
            children: [
                {
                    label: "小学",
                    children: []
                },
                {
                    label: "中学",
                    children: []
                }
            ]
        }
    ])
});

export default {
    b1
};
