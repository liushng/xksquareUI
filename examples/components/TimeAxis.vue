<template>
    <div class = 'TimeAxis'>
        <TimeAxis/>
    </div>
</template>
<script>
import TimeAxis from "../../packages/time-axis"
export default {
    name:'HelloWorld1',
    data () {
        return {
        };
    },
    props: {},
    components: {
        TimeAxis
    },
    computed: {},
    created() {},
    mounted() {},
    methods: {},
    watch: {}
}
</script>
<style scoped>
.TimeAxis{
    background: gray;
    padding: 20px;
}
</style>