/*
    创建者：shuxiaokai
    创建时间：2019-05-31 13:14
    模块名称：xxxx
    备注：xxxx
*/
<template>
    <div class="s-tabs px-1">
        <div class="left">
            <i class="iconfont icon-xiazai45" :class="{active: activeIndex === 1}" @click="active(1)"></i>
            <i class="iconfont icon-zhoubian" :class="{active: activeIndex === 2}" @click="active(2)"></i>
        </div>
        <div class="middle">
            <div class="button">
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-sousuo"></use>
                </svg>
            </div>
        </div>
        <div class="right">
            <i class="iconfont icon-shouyedabiaoti-" :class="{active: activeIndex === 3}" @click="active(3)"></i>
            <i class="iconfont icon-wode" :class="{active: activeIndex === 4}" @click="active(4)"></i>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            activeIndex: 1
        };
    },
    created() {},
    methods: {
        active(index) {
            this.activeIndex = index;
        }
    }
};
</script>



<style lang="scss">
.s-tabs {
    height: 50px;
    display: flex;
    box-shadow: 0 -3px 7px #eee;
    position: relative;
    // &::after {
    //     content: "";
    //     display: inline-block;
    //     width: rem(50);
    //     height: rem(25);
    //     position: absolute;
    //     left: 50%;
    //     top: rem(-12);
    //     transform: translateX(-50%);
    //     // border: 1px solid red;
    //     z-index: -1;
    //     border-radius: 50%;
    //     background: #2cf;
    // }
    .left,.right {
        width: 35%;
        display: flex;
        align-items: center;
        justify-content: space-around;
        & > .iconfont {
            color: $gray-600;
            width: rem(35);
            height: rem(35);
            line-height: rem(35);
            text-align: center;
            font-size: rem(22);
            border-radius: 50%;
            &.active {
                color: $theme-color;
                background: mix($theme-color, $white, 30%);
                animation: scale .3s;
            }
        }
    }
    .middle {
        flex: 1;
        width: 20%;
        text-align: center;
        & > .button {
            width: rem(50);
            height: rem(50);
            display: inline-block;
            border-radius: 50%;
            .icon {
                width: 80%;
                height: 80%;
            }
        }
    }
   
    @keyframes scale {
        0% {
            transform: scale(1.15, 1.15);
        }
        100% {
            transform: scale(1, 1);
        }
    }
}
</style>
