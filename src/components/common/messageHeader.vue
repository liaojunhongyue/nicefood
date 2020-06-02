<template>
	<header class="message-header">
		<div @click="goHistory" class="go-back">
			<i class="fa fa-angle-left" aria-hidden="true"></i>
		</div>
		{{message}}
		<div class="ignore">
			<p>忽略</p>
		</div>
	</header>
</template>
<script>
	export default {
		props: ['message'],
		methods: {
			goHistory: function(){
				this.$router.go(-1);
			}
		}
	}
</script>
<style lang="less">
	.message-header {
		position: fixed;
		top: 0px;
		left: 0px;
		width: 100%;
		height: 40px;
		text-align: center;
		line-height: 40px;
		font-size: 16px;
		color: #333;
		background-color: #fff;
		border-bottom: 1px solid #e7e7e7;
		z-index: 100;
		.go-back {
			position: absolute;
			left: 10px;
			i {
				font-size: 18px;
				color: #ff6066;
			}
		}
		.ignore {
			position: absolute;
			top: 0;
			right: 0;
			height: 40px;
			line-height: 40px;
			width: 50px;
			text-align: center;
		}
	}
</style>