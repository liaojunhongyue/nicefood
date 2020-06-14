<template>
	<div class="user-collect">
		<header>
			<router-link :to="'/user'" class="go-back">
				<i class="fa fa-angle-left" aria-hidden="true"></i>
			</router-link>
			<div class="search-collect">
				<i class="fa fa-search" aria-hidden="true"></i>
				<input type="text" placeholder="搜索你的收藏" />
			</div>
			<div class="edit-collect">
				<p>编辑</p>
			</div>
		</header>
		<div class="user-collect-tab">
			<router-link :to="'/user/collect/all'" class="tab-list">全部收藏</router-link>
			<router-link :to="'/user/collect/my'" class="tab-list">我的菜单</router-link>
			<router-link :to="'/user/collect/menu'" class="tab-list">收藏菜单</router-link>
		</div>
		<router-view></router-view>
	</div>
</template>
<script>
	export default {
		
	}
</script>
<style lang="less">
	.user-collect {
		header {
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
					color: #383838;
					font-size: 18px;
				}
			}
			.search-collect {
				position: absolute;
				top: 8px;
				left: 50px;
				right: 50px;
				height: 24px;
				background-color: #ececec;
				i {
					position: absolute;
					left: 0;
					top: 0;
					margin: 4px 0 0 6px;
					background-color: #ececec;
					z-index: 10;
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
			.edit-collect {
				position: absolute;
				right: 0px;
				top: 0px;
				width: 50px;
				height: 40px;
				line-height: 40px;
				text-align: center;
				p {
					color: #ff2323;
				}
			}
		}
		.user-collect-tab {
			position: fixed;
			top: 40px;
			left: 0;
			width: 100%;
			height: 35px;
			line-height: 35px;
			display: flex;
			background-color: #fff;
			border-bottom: 1px solid #e7e7e7;
			z-index: 10;
			.tab-list {
				flex-grow: 1;
				text-align: center;
				border-bottom: 2px solid #fff;
			}
			.router-link-active {
				color: #ff2323;
				border-bottom: 2px solid #ff2323;
			}
		}
	}
	
</style>