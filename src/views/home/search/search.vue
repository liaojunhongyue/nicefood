<template>
	<div class="search">
		<div class="add" @click="showAdd" :class="this.$store.state.add.addrotate">
			<i class="fa fa-plus" aria-hidden="true"></i>
		</div>
		<div class="input">
			<i class="fa fa-search" aria-hidden="true"></i>
			<input type="text" placeholder="菜谱、食材" />
		</div>
		<router-link :to="'/message'" class="message">
			<i class="fa fa-envelope-o" aria-hidden="true"></i>
		</router-link>
	</div>
</template>
<script>
	export default {
		data() {
			return {
				rotateAdd: ''
			}
		},
		methods: {
			showAdd: function(){
				this.$store.state.add.showadd = true;
				this.$store.state.add.addrotate = 'rotate';
			}
		}
	}
</script>
<style lang="less">
	.search {
		position: fixed;
		top: 0px;
		left: 0px;
		height: 40px;
		width: 100%;
		background-color: #fff;
		border-bottom: 1px solid #e7e7e7;
		z-index: 100;
		.add {
			position: absolute;
			top: 0px;
			left: 0px;
			height: 40px;
			width: 50px;
			text-align: center;
			transition: all 0.3s;
			i {
				margin-top: 11px;
				color: #303030;
				font-size: 20px;
			}
		}
		.rotate {
			transform: rotateZ(45deg);
		}
		.input {
			position: absolute;
			top: 8px;
			left: 50px;
			right: 50px;
			height: 24px;
			background-color: #ececec;
			i {
				position: relative;
				margin: 4px 0 0 6px;
				background-color: #ececec;
				z-index: 100;
			}
			input[type=text] {
				position: absolute;
				width: 100%;
				left: 0;
				padding-left: 25px;
				height: 22px;
				border: 0;
				background-color: #ececec;
				box-sizing: border-box;
			}
		}
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