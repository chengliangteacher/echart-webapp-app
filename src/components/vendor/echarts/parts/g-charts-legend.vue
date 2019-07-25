<template>
    <div>
        <el-form ref="form" :model="legend" label-width="120px">
            <el-form-item label="是否显示">
                <el-switch v-model="legend.show"></el-switch>
            </el-form-item>
            <el-form-item label="图例类型">
                <el-radio-group v-model="legend.type">
                    <el-radio label="plain">普通图例,缺省就是普通图例。</el-radio>
                    <el-radio label="scroll">可滚动翻页的图例,当图例数量较多时可以使用。</el-radio>
                </el-radio-group>
            </el-form-item>
            {{legend.data}}
            <el-form-item label="新增图例">
                <el-input type="text" size="small" v-model="legenData.name"></el-input>
                <el-radio-group v-model="legenData.icon">
                    <el-radio label="circle">圆圈</el-radio>
                    <el-radio label="rect">方块</el-radio>
                    <el-radio label="roundRect">带圆角的方块</el-radio>
                    <el-radio label="triangle">三角形</el-radio>
                    <el-radio label="diamond">棱形</el-radio>
                    <el-radio label="pin">圆圈</el-radio>
                    <el-radio label="arrow">箭头</el-radio>
                    <el-radio label="none">无图例</el-radio>
                    <!-- <el-radio @click="showInput">
                        自定义图例
                    </el-radio>
                        <el-input v-show="input" v-model="item.icon"></el-input> -->
                </el-radio-group>
                <el-form-item >
                    <el-button  @click="add">新增图例</el-button>
                </el-form-item>

            </el-form-item>
            <el-form-item label="图例文字颜色">
                <el-color-picker v-model="legend.textStyle.color" show-alpha @active-change="handleColorChange"></el-color-picker>
            </el-form-item>
            <el-form-item label="点击图例改变">
                <el-switch v-model="legend.selectedMode"></el-switch>
            </el-form-item>
            
            <el-form-item label="图例文字字重">
                <el-radio-group v-model="legend.textStyle.fontWeight">
                    <el-radio label="normal">默认</el-radio>
                    <el-radio label="lighter">细</el-radio>
                    <el-radio label="bold">粗</el-radio>
                    <el-radio label="bolder">超级粗</el-radio>
                </el-radio-group>
            </el-form-item>
            <el-form-item label="图例位置(x)">
                <el-slider v-model="posX" :min="0" :max="100" class="w-50"></el-slider>
            </el-form-item>
            <el-form-item label="图例位置(y)">
                <el-slider v-model="posY" :min="0" :max="100" class="w-50"></el-slider>
            </el-form-item>
            <el-form-item label="图例间隔">
                <el-input-number v-model="legend.itemGap"  size="small"  :min="-100" :max="100" ></el-input-number>
            </el-form-item>
            <el-form-item label="图例朝向">
                <el-radio-group v-model="legend.orient">
                    <el-radio label="horizontal">默认</el-radio>
                    <el-radio label="vertical">水平</el-radio>
                </el-radio-group>
            </el-form-item>
            <el-form-item label="图例宽度">
                <el-input-number v-model="legend.width"  size="small"  :min="-100" :max="100" ></el-input-number>
            </el-form-item>
            <el-form-item label="图例高度">
                <el-input-number v-model="legend.height"  size="small"  :min="-100" :max="100" ></el-input-number>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
export default {
  inject: ["legend"],
  components: {},
  data() {
    return {
      posX: 0,
      posY: 0,
      input: false,
      legenData: {
        name: "",
        icon: "",
        textStyle: {
          color: "red"
        }
      }
    };
  },
  watch: {
    posX: {
      handler(newVal) {
        this.legend.left = newVal + "%";
      },
      immediate: true
    },
    posY: {
      handler(newVal) {
        this.legend.top = newVal + "%";
      },
      immediate: true
    }
    // legenData:{
    //     handler(newVal){

    //     },
    //   immediate: true
    // }
  },
  mounted() {},
  methods: {
    handleColorChange(val) {
      this.legend.textStyle.color = val;
    },
    add() {
    //   this.legend.data.unshift(this.legenData);
    this.legend.data.push({
        name:this.legenData.name,
        icon:this.legenData.icon
    })
      this.legenData.name = ''
      this.legenData.icon = ''
    }
  }
};
</script>



<style lang="scss">
</style>
