/*
    创建者：shuxiaokai
    创建时间：2019-04-10 20:46
    模块名称：xxxx
    备注：xxxx
*/
<template>
    <div>
        <el-form-item label="x轴名字位置">
            <el-color-picker v-model="text.color" show-alpha @active-change="handleColorChange"></el-color-picker>
        </el-form-item>
        <el-form-item label="图例文字字重">
            <el-radio-group v-model="text.fontWeight">
                <el-radio label="normal">默认</el-radio>
                <el-radio label="lighter">细</el-radio>
                <el-radio label="bold">粗</el-radio>
                <el-radio label="bolder">超级粗</el-radio>
            </el-radio-group>
        </el-form-item>
        <el-form-item label="字体大小">
            <el-input-number v-model="text.fontSize"  size="small"  :min="12" :max="100"></el-input-number>
        </el-form-item>
    </div>
</template>

<script>
export default {
    props: {
        text: {
            type: Object
        },
    },
    data() {
        return {

        };
    },
    created() {

    },
    methods: {
        handleColorChange(val) {
            this.text.color = val;
        }
    }
};
</script>



<style lang="scss">

</style>
