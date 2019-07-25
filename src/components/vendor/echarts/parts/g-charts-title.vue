<template>
    <div>
        <el-form ref="form" :model="title" label-width="120px">
            <el-form-item label="是否显示">
                <el-switch v-model="title.show"></el-switch>
            </el-form-item>
            <el-form-item label="大标题(\n换行)">
                <el-input size="small" v-model="title.text" class="w-50"></el-input>
            </el-form-item>
            <el-form-item label="文字颜色">
                <el-color-picker v-model="title.textStyle.color" show-alpha @active-change="handleColorChange"></el-color-picker>
            </el-form-item>
            <el-form-item label="字重">
                <el-radio-group v-model="title.textStyle.fontWeight">
                    <el-radio label="normal">默认</el-radio>
                    <el-radio label="lighter">细</el-radio>
                    <el-radio label="bold">粗</el-radio>
                    <el-radio label="bolder">超级粗</el-radio>
                </el-radio-group>
            </el-form-item>
            <el-form-item label="字体大小">
                <el-input-number v-model="title.textStyle.fontSize"  size="small"  :min="12" :max="100" ></el-input-number>
            </el-form-item>
            <el-form-item label="文字位置(x)">
                <el-slider v-model="posX" :min="0" :max="100" class="w-50"></el-slider>
            </el-form-item>
            <el-form-item label="文字位置(y)">
                <el-slider v-model="posY" :min="0" :max="100" class="w-50"></el-slider>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
export default {
    inject: ["title"],
    components: {},
    data() {
        return {
            posX: 0,
            posY: 0
        };
    },
    watch: {
        posX: {
            handler(newVal) {
                this.title.left = newVal + "%";
            },
            immediate: true
        },
        posY: {
            handler(newVal) {
                this.title.top = newVal + "%";
            },
            immediate: true
        }
    },
    mounted() {
      
    },
    methods: {
        handleColorChange(val) {
            this.title.textStyle.color = val;
        }
    }
};
</script>



<style lang="scss">

</style>
