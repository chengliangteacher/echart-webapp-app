import Mock from "@/mock/development/mock-data/mockjs"
const Random = Mock.Random


export default {
    //=====================================标准数据====================================//
    standard() {
        //申请复检
        if (Random.boolean()) {
            return Mock.mock({
                raiseUserName: Random.cname(), //异议提出人姓名
                typeId: Random.natural(0, 6), //异议分类id
                typeName: Random.cname(), //异议分类名字
                content: Random.csentence(), //异议内容
                proofMaterial: [Random.image(), Random.image()], //证明材料
                proofMaterialDesc: Random.csentence(), // 证明材料描述
                enterpriseStandard: [Random.image(), Random.image()], //企业标准
                enterpriseStandardDesc: Random.csentence(), //企业标准描述
                selfProof: [Random.image(), Random.image()], //自我声明材料
                selfProofDesc: Random.csentence(), //自我声明描述
                authenticity: [Random.image(), Random.image()], //其他材料
                authenticityDesc: Random.csentence(), //其他材料描述
                applyForm: Random.file(), //异议申请书
                isRecheck: 1, //是否申请复检
                recheck: {
                    reason: Random.csentence(), //复检理由
                    items: [Random.natural(330, 340), Random.natural(330, 340)],
                    form: Random.file(), //复检申请书
                    delegation: Random.file(), //复检委托书
                    copyIdCard: Random.file() //身份证复印件
                }
            })
        } else {
            return Mock.mock({
                raiseUserName: Random.cname(), //异议提出人姓名
                typeId: Random.natural(0, 6), //异议分类id
                typeName: Random.cname(), //异议分类名字
                content: Random.csentence(), //异议内容
                proofMaterial: [Random.image(), Random.image()], //证明材料
                proofMaterialDesc: Random.csentence(), // 证明材料描述
                enterpriseStandard: [Random.image(), Random.image()], //企业标准
                enterpriseStandardDesc: Random.csentence(), //企业标准描述
                selfProof: [Random.image(), Random.image()], //自我声明材料
                selfProofDesc: Random.csentence(), //自我声明描述
                authenticity: [Random.image(), Random.image()], //其他材料
                applyForm: Random.file(), //异议申请书
                authenticityDesc: Random.csentence(), //其他材料描述
                isRecheck: 0, //是否申请复检
           
            })
        }
    },
    //=====================================随机数据====================================//
    random() {
        //申请复检
        if (Random.boolean()) {
            return Mock.mock({
                raiseUserName: Random.cname(), //异议提出人姓名
                typeId: Random.natural(0, 6), //异议分类id
                typeName: Random.cname(), //异议分类名字
                content: Random.csentence(), //异议内容
                proofMaterial: [Random.image(), Random.image()], //证明材料
                proofMaterialDesc: Random.csentence(), // 证明材料描述
                enterpriseStandard: [Random.image(), Random.image()], //企业标准
                enterpriseStandardDesc: Random.csentence(), //企业标准描述
                selfProof: [Random.image(), Random.image()], //自我声明材料
                selfProofDesc: Random.csentence(), //自我声明描述
                authenticity: [Random.image(), Random.image()], //其他材料
                authenticityDesc: Random.csentence(), //其他材料描述
                applyForm: Random.file(), //异议申请书
                isRecheck: 1, //是否申请复检
                recheck: {
                    reason: "", //复检理由
                    items: [],
                    form: "", //复检申请书
                    delegation: "", //复检委托书
                    copyIdCard: "" //身份证复印件
                }
            })
        } else {
            return Mock.mock({
                raiseUserName: Random.cname(), //异议提出人姓名
                typeId: Random.natural(0, 6), //异议分类id
                typeName: Random.cname(), //异议分类名字
                content: Random.csentence(), //异议内容
                proofMaterial: [Random.image(), Random.image()], //证明材料
                proofMaterialDesc: Random.csentence(), // 证明材料描述
                enterpriseStandard: [Random.image(), Random.image()], //企业标准
                enterpriseStandardDesc: Random.csentence(), //企业标准描述
                selfProof: [Random.image(), Random.image()], //自我声明材料
                selfProofDesc: Random.csentence(), //自我声明描述
                authenticity: [Random.image(), Random.image()], //其他材料
                applyForm: Random.file(), //异议申请书
                authenticityDesc: Random.csentence(), //其他材料描述
                isRecheck: 0, //是否申请复检
           
            })
        }
    }

}
