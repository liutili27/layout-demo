<template>
    <!--
    <div>
        <div>
            <p>以下为一些flex布局示例整理</p>
            <p><img src="../assets/layout-1.png" /></p>
            <flex-layout-index></flex-layout-index>
        </div>
    </div>-->
    <div>
        <ol>
            <todo-item v-for="(item, index) in list" :data="item" :key="index"></todo-item>
        </ol>
    </div>
</template>

<script>
// import flexLayoutIndex from '@/views/flex-layout-index.vue';
import todoItem from '@/components/todo-item.vue';

export default {
    components: { todoItem },
    data() {
        return {
            list: ['苹果', '香蕉', '梨子']
        };
    }
};
</script>

<style scoped>

</style>
