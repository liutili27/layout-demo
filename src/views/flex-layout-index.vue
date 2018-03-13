<template>
    <div>
        <!--<common-nav :data="navData"></common-nav>-->
        
    </div>
</template>

<script>
import commonNav from '@/components/commonNav.vue';
export default {
    components: { commonNav },
    data: function() {	
        return {
            navData: ['导航1', '导航2', '导航3']
        }
    },
    methods: {}
}
</script>

<style scoped>

</style>