<template>
    <div class="layout-container">
        <s-header></s-header>
        <div class="s-content">
            <router-view></router-view>
        </div>
        <s-tabs></s-tabs>
    </div>
</template>
<script>
import header from "@/pages/layout/header/header.vue";
import tabs from "@/pages/layout/tabs/tabs.vue";
export default {
    components: {
        "s-header": header,
        "s-tabs": tabs
    },
    data() {
        return {
        };
    },

    created() {}
};
</script>

<style lang='scss'>
.layout-container {
    min-height: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    .s-content {
        flex: 1;
    }

}
</style>
