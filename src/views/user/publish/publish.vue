<template>
  <div class="user-publish">
    <f-normal-header message="我的发布" historyurl="/user" />
    <div class="user-publish-tab">
      <router-link :to="'/user/publish/menu'" class="tab-list">菜谱</router-link>
      <router-link :to="'/user/publish/article'" class="tab-list">文章</router-link>
      <router-link :to="'/user/publish/works'" class="tab-list">作品</router-link>
      <router-link :to="'/user/publish/talks'" class="tab-list">食话</router-link>
    </div>
    <router-view />
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
	.user-publish {
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
					font-size: 18px;
				}
			}
		}
		.user-publish-tab {
			position: fixed;
			top: 40px;
			left: 0;
			width: 100%;
			height: 35px;
			line-height: 35px;
			border-bottom: 1px solid #e7e7e7;
			display: flex;
			.tab-list {
				flex-grow: 1;
				text-align: center;
			}
			.router-link-active {
				color: #ff2323;
				border-bottom: 2px solid #ff2323;
			}
		}
	}
</style>
