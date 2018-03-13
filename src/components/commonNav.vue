<!-- 公共导航组件 -->
<template>
    <div>
        <div class="flex-row">
            <div v-for="(item, index) in data" :key="index">{{ item }}</div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        data: Array
    },
    data: function() {
        return {};
    },
    methods: {}
};
</script>

<style scoped>
.flex-row {
    display: flex;
}
</style>