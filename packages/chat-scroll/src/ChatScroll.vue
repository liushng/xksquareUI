<template>
	<div class = 'chat-scroll' id="xk-chat-main" ref = "scrollDom">
		<div class="chat-content">
			<bubble class="before-pull-down" :y="bubbleY" v-if="beforePullDown"></bubble>
			<div class="poll-down-loaidng" v-if="pullDownLoading">
				<img src="./loading.gif" alt="">
			</div>
			<slot></slot>
		</div>
		<div class="after-poll-down" 
			v-if="afterPullDown"
			:style="{'color':tip.color,'background':tip.background}"
		>
			{{tip.content}}
		</div>
	</div>
</template>
<script>
import BScroll from 'better-scroll';
import bubble from "./bubble"
export default {
	name:'chatScroll',
	data () {
		return {
			BetterScroll:null,
			pullDownRefresh:false,
			beforePullDown:true,//加载数据前
			pullDownLoading:false,//加载数据中
			afterPullDown:false,
			bubbleY:0,
			lastHeight:0,//上次高，下拉加载时记录位置
			pullTimer:null,
			threshold:0,//下拉距离
		};
	},
	props: {
		tip:{
			type:Object,
			default(){
				return {
					content:'加载成功...',
					color:"#2196f3",
					background:'#ddd',
					time:300
				}
			}
		},
		finishLoading:{
			type:Boolean,
			default:false
		}
	},
	components: {
		bubble
	},
	computed: {},
	created() {},
	mounted() {
		this.init();
	},
	methods: {
		init(){
			this.scrollInit();
			this.scrollToWhere();
		},
		scrollInit(){
			this.BetterScroll = new BScroll(this.$refs.scrollDom,{
				probeType:1,
				click:true,
				scrollY:true,
				mouseWheel: true,
				pullDownRefresh:{
					stop:40
				}
			});
			this.pullDownInitTop = -50 ;
			// 下拉释放前
			this.BetterScroll.on('scroll', (pos) => {
				if(this.beforePullDown){
					this.threshold = pos.y ;//记录下拉距离
					this.bubbleY = this.bubbleY = Math.max(0, pos.y + this.pullDownInitTop);   
					if(pos.y + this.pullDownInitTop > -35){
						this.pullDownRefresh = true;
					}else{
						this.pullDownRefresh = false;
					}
				}else{
					this.bubbleY = 0
				}
			});
			// 释放加载中
			this.BetterScroll.on('pullingDown', () => {
				this.lastHeight = document.querySelector("#xk-chat-main").scrollHeight - this.threshold ;
				this.beforePullDown = false;
				this.pullDownLoading = true ;
				this.$emit('onLoading')
			})
		},
		pullingDownFinish(){
			this.pullDownLoading = false ;
			this.afterPullDown = true ;
			clearTimeout(this.pullTimer);
			this.scrollToWhere();//滚动位置
			this.pullTimer = setTimeout(()=>{
				this.BetterScroll.finishPullDown();
				this.beforePullDown = true ;
				this.afterPullDown = false ;
				this.pullDownRefresh = false ;
				this.$emit('update:finishLoading',false);
			},this.tip.time)
		},
		scrollToWhere(){
			this.$nextTick(()=>{
				this.BetterScroll.refresh()
				let allHeight = document.querySelector("#xk-chat-main").scrollHeight;
				let height = document.querySelector("#xk-chat-main").offsetHeight;
				if(!this.pullDownRefresh){
					this.BetterScroll.scrollTo( 0 , - allHeight + height );
				}else{
					this.BetterScroll.scrollTo( 0 , - allHeight + this.lastHeight );
				}
			})
		}
	},
	watch: {
		finishLoading(val){
			if(val){
				this.pullingDownFinish();
			}
		}
	}
}
</script>
<style scoped lang="scss">
@import "./ChatScroll.scss";
</style>