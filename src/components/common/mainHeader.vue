<template>
	<header class="main-header">
		{{message}}
		<router-link :to="'/message'" class="message">
			<i class="fa fa-envelope-o" aria-hidden="true"></i>
		</router-link>
	</header>
</template>
<script>
	export default {
		props: ['message']
	}
</script>
<style lang="less">
	.main-header {
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
		.message {
			position: absolute;
			right: 0px;
			top: 0px;
			width: 50px;
			height: 40px;
			text-align: center;
			i {
				margin-top: 10px;
				color: #303030;
				font-size: 20px;
			}
		}
	}
</style>