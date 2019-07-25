import Mock from "@/mock/development/mock-data/mockjs"
const Random = Mock.Random


export default {
    //=====================================标准数据====================================//
    standard() {
        return {
            companyName: "中国银行", //------------------企业名称
            licenseNumber: "A3222032N7R65AI6RK", //---------------统一信用代码
            legalRep: "丁秀兰" //-----------------企业法人
        }
    },
    //=====================================随机数据====================================//
    random() {
        return Mock.mock({
            companyName: Random.testData(), //------------------企业名称
            licenseNumber: Random.testData(), //---------------统一信用代码
            legalRep: Random.testData() //-----------------企业法人
        }) 
    }

}
