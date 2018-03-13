<template>
    <div class="mb10">
        <sample-title class="title-text mb10">{{title}}</sample-title>
        <div><slot></slot></div>
    </div>
</template>

<script>
import sampleTitle from './sample-title';

export default {
    components: { sampleTitle },
    props: {
        title: String
    },
    data: function() {	
        return {}
    },
    methods: {}
}
</script>

<style scoped>
.title-text {
    font-size: 18px;
}
</style>