<template>
	<div class="user-comment">
		<f-normal-header message="我的评论" historyurl="/user"></f-normal-header>
		<ul class="user-comment-tab">
			<router-link :to="'/user/comment/menu'" class="tab-item"><span>菜谱</span></router-link>
			<router-link :to="'/user/comment/works'" class="tab-item"><span>作品</span></router-link>
			<router-link :to="'/user/comment/talks'" class="tab-item"><span>食话</span></router-link>
		</ul>
		<router-view></router-view>
	</div>
</template>
<script>
	import fNormalHeader from '@/components/common/normalHeader.vue'

	export default {
		components: {
			'f-normal-header': fNormalHeader
		}
	}
</script>
<style lang="less">
	.user-comment {
		padding: 80px 0 0 0;
		box-sizing: border-box;
		.user-comment-tab {
			position: fixed;
			left: 0;
			top: 40px;
			width: 100%;
			height: 40px;
			line-height: 40px;
			display: flex;
			.tab-item {
				flex-grow: 1;
				width: 0;
				text-align: center;
				span {
					display: inline-block;
					height: 40px;
				}
			}
			.router-link-active {
				span {
					border-bottom: 2px solid #ff2323;
				}
			}
		}
	}
</style>
