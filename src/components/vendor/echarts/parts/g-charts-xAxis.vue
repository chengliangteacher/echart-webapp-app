<template>
    <div>
        <el-form ref="form" :model="xAxis" label-width="120px">
            <el-form-item label="是否显示">
                <el-switch v-model="xAxis.show"></el-switch>
            </el-form-item>
            <el-form-item label="x轴类型">
                <el-radio-group v-model="xAxis.type">
                    <el-radio label="category">类目轴(适用于离散的类目数据，为该类型时必须通过 data 设置类目数据)</el-radio>
                    <el-radio label="time">时间轴(适用于连续的时序数据，与数值轴相比时间轴带有时间的格式化，在刻度计算上也有所不同，例如会根据跨度的范围来决定使用月，星期，日还是小时范围的刻度)</el-radio>
                    <el-radio label="value">数值轴(适用于连续数据)</el-radio> <br>
                    <el-radio label="log">对数轴(适用于对数数据)</el-radio>
                </el-radio-group>
            </el-form-item>
            <el-form-item label="x轴所在位置">
                <el-radio-group v-model="xAxis.position">
                    <el-radio label="top">上方</el-radio>
                    <el-radio label="bottom">下方</el-radio>
                </el-radio-group>
            </el-form-item>
            <el-form-item label="x轴名称">
                <el-input type="text" size="small" v-model="xAxis.name"></el-input>
            </el-form-item>
            <el-form-item label="x轴名字样式">
                <s-charts-style :text="xAxis.nameTextStyle"></s-charts-style>
            </el-form-item>
            <el-form-item label="名称与轴线距离">
                <el-input-number v-model="xAxis.nameGap"  size="small"  :min="-100" :max="100" ></el-input-number>
            </el-form-item>
            <el-form-item label="坐标轴名字旋转">
                <el-input-number v-model="xAxis.nameRotate"  size="small"  :min="-100" :max="100" ></el-input-number>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
export default {
    inject: ["xAxis"],
    components: {},
    data() {
        return {
            posX: 0,
            posY: 0,
            input: false
        };
    },
    watch: {},
    mounted() {},
    methods: {
        handleColorChange(val) {
            this.xAxis.textStyle.color = val;
        },
       
    }
};
</script>



<style lang="scss">
</style>
