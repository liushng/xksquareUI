<template>
    <div class = 'time-axis'>
        <div class="time-item" v-for="(item,index) in timeData" :key="index">
			<div class="time-picture">
				<img :src="item.imgUrl">
			</div> 

			<div class="time-content" :style="color?getBgColor():''">
				<h2>{{item.title}}</h2>
				<p>{{item.content}}</p>
				<div class="more-btn">
                    <span class="date">{{item.time}}</span>
                    <div class="a-btn">
                        <a @click="fnJump(item.url)" class="read-more">详情</a>
                    </div>
                </div>
			</div> 
		</div>
    </div>
</template>
<script>
export default {
    name:'TimeAxis',
    data () {
        return {

        };
    },
    props: {
        timeData:{
            type:Array,
            default(){
                return [
                    {
                        imgUrl:"http://topmiss.cn/images/panda.jpg",
                        title:"TimeAxis",
                        content:"TimeAxis content",
                        url:"#",
                        time:new Date()
                    }
                ]
            }
        },
        color:{
            type:Boolean,
            default:false
        }
    },
    components: {},
    computed: {},
    created() {},
    mounted() {},
    methods: {
        getRandomColor(){
            let colorArr = [
                "#f44336",
                "#e91e63",
                "#9c27b0",
                "#03a9f4",
                "#4caf50",
                "#8bc34a",
                "#cddc39",
                "#ffeb3b",
                "#ffc107",
                "#ff9800",
                "#ff5722"
            ]
            // return '#'+Math.floor(Math.random()*0xffffff).toString(16);
            return colorArr[~~(Math.random()*colorArr.length)];
        },
        getBgColor(){
            return `background:linear-gradient(${Math.random()*360}deg,${this.getRandomColor()},${this.getRandomColor()})`
        },
        fnJump(url){
            this.$router.push(url)
        }
    },
    watch: {}
}
</script>
<style scoped lang="scss">
@import "./TimeAxis.scss";
</style>