/*
    创建者：shuxiaokai
    创建时间：2019-05-31 13:14
    模块名称：xxxx
    备注：xxxx
*/
<template>
    <div class="s-header px-1 f-bg">
        <span class="iconfont icon-left gray-200"></span>
        <span class="gray-200">首页</span>
    </div>
</template>

<script>
export default {
    data() {
        return {

        };
    },
    created() {

    },
    methods: {

    }
};
</script>



<style lang="scss">
    .s-header {
        height: 50px;
        background: $theme-color;
        box-shadow: $box-shadow-lg;
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        &>.iconfont {
            height: 50px;
            line-height: 50px;
            width: rem(50);
            text-align: center;
            position: absolute;
            left: .5em;
        }
    }
</style>
