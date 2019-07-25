/* 
    @description  mock二次封装
    @autor        shuxiaokai
    @create       2019-04-16 19:26"
*/
import Mock from "mockjs";
import area from "./common-data/area.json";
import Chance from "chance";
const Random = Mock.Random;
const chance = new Chance();

const pointArea = area.RECORDS.map(val => {
    return {
        title: val.name,
        point: {
            lng: val.longitude,
            lat: val.latitude
        }
    };
});

/* 
    @description  扩展数据模板
    @autor        shuxiaokai
    @create       2019-04-16 19:29"
    @params       
    @return       
*/
Random.extend({
    /* 
        @description  经纬度
        @autor        shuxiaokai
        @create       2019-04-16 19:30"
        @params       地区名称，带 "市" 字
    */
    lat(area = "深圳市", range = 1000) {
        let lat = 22.549257; //默认展示深圳经纬度
        range = range / 10000;
        const offsetLat = chance.floating({ min: 0.001, max: 0.1 });
        for (let i = 0, len = pointArea.length; i < len; i++) {
            if (pointArea[i].title === area) {
                const point = { ...pointArea[i].point };
                lat = point.lat;
                break;
            }
        }
        lat = parseFloat(lat) + offsetLat;
        return lat;
    },
    lng(area = "深圳市", range = 1000) {
        let lng = 114.065702; //默认展示深圳经纬度
        range = range / 10000;
        const offsetLng = chance.floating({ min: 0.001, max: 0.1 });
        for (let i = 0, len = pointArea.length; i < len; i++) {
            if (pointArea[i].title === area) {
                const point = { ...pointArea[i].point };
                lng = point.lng;
                break;
            }
        }
        lng = parseFloat(lng) + offsetLng;
        return lng;
    },
    /* 
        @description  食品大类
        @autor        shuxiaokai
        @create       2019-04-24 20:40"
        @return       某个食品大类
    */
    aClass() {
        const subs = [
            "粮食及粮食制品",
            "食用油油脂及其制品",
            "调味品",
            "肉制品",
            "乳制品",
            "饮料",
            "方便制品"
        ];
        return this.pick(subs);
    },
    /* 
        @description  食品亚类
        @autor        shuxiaokai
        @create       2019-04-24 20:40"
        @return       某个食品亚类
    */
    bClass() {
        const subs = [
            "茶叶",
            "蒸馏酒",
            "糖果制品",
            "肉制品",
            "发酵酒",
            "食塘",
            "蛋制品"
        ];
        return this.pick(subs);
    },
    /* 
        @description  食品细类
        @autor        shuxiaokai
        @create       2019-04-24 20:35"
        @return       某个食品细类
    */
    cClass() {
        const subs = [
            "大米",
            "普通挂面",
            "其他谷物粉类制成",
            "食用动物油脂",
            "大料",
            "花椒粉",
            "鸡精"
        ];
        return this.pick(subs);
    },
    /* 
        @description  公司名称
        @autor        shuxiaokai
        @create       2019-04-25 09:33"
    */
    ccompany() {
        const subs = [
            "中国农业银行",
            "国家电网公司",
            "中国石油天然气集团公司",
            "东风汽车集团",
            "中国电信集团公司",
            "中国银行",
            "中国铁道建筑总公司"
        ];
        return this.pick(subs);
    },
    /* 
        @description  随机地址生成
        @autor        shuxiaokai
        @create       2019-04-25 09:33"
    */
    address() {
        const subs = [
            "北京王府井大街",
            "四川省成都市新希望国际b座",
            "深圳市龙岗区乡村基街道办",
            "四川省成都市锦江区红星路33号",
            "绵阳市涪城区西南科技大学",
            "四川省成都市大邑县西岭雪山",
        ];
        return this.pick(subs);
    },
    /* 
        @description  生成图片
        @autor        shuxiaokai
        @create       2019-05-10 16:10"
        @params       
        @return       
    */
    image() {
        const subs = [
            "http://sample-test.xrdev.cn/shgz/images/20190513060905634_1557727745634.png",
            "http://sample-test.xrdev.cn/shgz/images/20190513061031570_1557727831570.jpg",
        ];
        return this.pick(subs);
    },
    /* 
        @description  生成文件
        @autor        shuxiaokai
        @create       2019-05-14 15:48"
        @params       
        @return       
    */
    file() {
        const subs = [
            "http://sample-test.xrdev.cn/shgz/images/20190513060905634_1557727745634.png",
            "http://sample-test.xrdev.cn/shgz/images/20190513061031570_1557727831570.jpg",
        ];
        return this.pick(subs);
    },
    /* 
        @description  抽样单编号
        @autor        shuxiaokai
        @create       2019-05-14 15:31"
        @params       
        @return       
    */
    sampleCode() {
        return /\W{2}\d{17}/;
    },
    /* 
        @description  测试数据  随机生成   时间   数字   字符串  对象   null  undefined  ""  0  -1  NaN  Infinity 长字符串  长数字   空对象 最大值  最小值 MAX_VALUE  MIN_VALUE
        @autor        shuxiaokai
        @create       2019-05-14 14:25"
        @params       
        @return       
    */
    testData(strict) {
        const subs = [
            null,
            undefined,
            0,
            -1,
            -0,
            Infinity,
            -Infinity,
            Number.MAX_VALUE,
            Number.MIN_VALUE,
            "",
            NaN,
            [],
            "longlonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglong",
            Random.boolean(),
            Random.natural(),
            Random.integer(),
            Random.float(),
            Random.character(),
            Random.string(),
            Random.color(),
            Random.hex(),
            Random.rgb(),
            Random.url(),
            Random.protocol(),
            Random.domain(),
            Random.tld(),
            Random.ip(),
        ];
        const subs2 = [
            Random.natural(),
            Random.integer(),
            Random.float(),
            Random.character(),
            Random.string(),
            Random.color(),
        ];
        if (strict) {
            return this.pick(subs);
        } else {
            return this.pick(subs2);
        }
    }

});

export default Mock;
