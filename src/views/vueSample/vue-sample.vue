<template>
    <div>
        <sample-block title="模板语法">
            <h2>{{ msg1 }}</h2>
            <div class="mb10">
                <div class="mb10">{{ msg2 }}</div>
                <Input v-model="msg2" placeholder="输入改变上面的文本" style="width: 300px"></Input>
            </div>
            <div class="mb10">
                <div class="mb10">{{ rawHtml }}</div>
                <div>
                    this is a html: <span v-html="rawHtml"></span>
                </div>
            </div>
            <div>现在的时间是：{{ nowDate }}</div>
            <div v-for="(item, index) of list" :key="index">{{item}}</div>
            <div v-for="(value, key, index) of object" :key="key">{{key}}: {{value}} === {{index}}</div>
        </sample-block>
    </div>
</template>

<script>
import sampleBlock from './sample-block';
export default {
    components: { sampleBlock },
    data: function() {	
        return {
            msg1: 'Yo.',
            msg2: 'v-once的使用',
            rawHtml: '<h1>Yo, yo.</h1>',
            testId: 'terry',
            list: ['1', '2', '3'],
            object: {
                name: 'xiaoming',
                sex: 'boy',
                age: 15
            }
        }
    },
    computed: {
        nowDate() {
            return new Date().toLocaleString();
        }
    },
    methods: {}
}
</script>

<style scoped>

</style>