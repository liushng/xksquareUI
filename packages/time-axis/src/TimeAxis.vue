<template>
    <div class = 'time-axis'>
        <div class="time-item">
			<div class="time-picture">
				<img src="./svg.svg" alt="">
			</div> 

			<div class="time-content">
				<h2>Title of section 1</h2>
				<p>aa</p>
				<div class="more-btn">
                    <span class="date">2019/5/27</span>
                    <div class="a-btn">
                        <a href="#0" class="read-more">详情</a>
                    </div>
                </div>
			</div> 
		</div> 
        <div class="time-item">
			<div class="time-picture">
				<img src="./svg.svg" alt="">
			</div> 

			<div class="time-content">
				<h2>Title of section 1</h2>
				<p>aa</p>
				<div class="more-btn">
                    <span class="date">2019/5/27</span>
                    <div class="a-btn">
                        <a href="#0" class="read-more">详情</a>
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
    props: {},
    components: {},
    computed: {},
    created() {
        console.log(this.getRandomColor())
    },
    mounted() {},
    methods: {
        getRandomColor(){
            return '#'+Math.floor(Math.random()*0xffffff).toString(16);time-axistime-axis
        }
    },
    watch: {}
}
</script>
<style scoped lang="scss">
@import "./TimeAxis.scss";
</style>