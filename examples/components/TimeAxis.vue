<template>
    <div class = 'TimeAxis'>
        <TimeAxis :timeData="timeData"/>
    </div>
</template>
<script>
import TimeAxis from "../../packages/time-axis"
export default {
    name:'HelloWorld1',
    data () {
        return {
            timeData:[
                {
                    imgUrl:"http://assets.topmiss.cn/images/panda.jpg",
                    title:"TimeAxis",
                    content:"TimeAxis content",
                    url:"#",
                    time:new Date()
                },
                {
                    imgUrl:"http://assets.topmiss.cn/images/panda.jpg",
                    title:"TimeAxis",
                    content:"TimeAxis content",
                    url:"#",
                    time:new Date()
                },
                {
                    imgUrl:"http://assets.topmiss.cn/images/panda.jpg",
                    title:"TimeAxis",
                    content:"TimeAxis content",
                    url:"#",
                    time:new Date()
                },
            ]
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