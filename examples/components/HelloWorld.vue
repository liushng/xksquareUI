<template>
  <div class="hello">
    <chatScroll :tip="tip" :finishLoading.sync="finishLoading" @onLoading="onLoading">
		<div class="item" v-for="(item,index) in divs" :key="index">{{item}}</div>
	</chatScroll>
  </div>
</template>

<script>
export default {
	name: 'HelloWorld',
	data() {
		return {
			divs:[
				1,2,3,4,5,6,7,8,9,10
			],
			finishLoading: false,
			tip:{
				content:'加载成功...',
				color:"#2196f3",
				background:'#ddd',
				time:300
			}
		}
	},	
	mounted() {
		
	},
	methods: {
		onLoading(){
			setTimeout(() => {
				this.divs.unshift(Math.random())
				this.divs.unshift(Math.random())
				this.divs.unshift(Math.random())
				this.divs.unshift(Math.random())
				this.divs.unshift(Math.random())
				this.finishLoading = true ;
			}, 1000);
		}
	},
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
#app{
background: #999;
}
</style>

<style scoped lang="scss">

.hello{
	width: 800px;
	height: 600px;
	background: #ffffff;
	.item{
		width: 100%;
		height: 100px;
		background: lightblue;
		margin-bottom: 10px
	}
}
</style>
