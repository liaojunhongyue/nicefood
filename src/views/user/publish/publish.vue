<template>
  <div class="user-publish">
    <f-normal-header message="我的发布" historyurl="/user" />
    <div class="user-publish-tab">
      <router-link :to="'/user/publish/menu'" class="tab-list">菜谱</router-link>
      <router-link :to="'/user/publish/article'" class="tab-list">文章</router-link>
      <router-link :to="'/user/publish/works'" class="tab-list">作品</router-link>
      <router-link :to="'/user/publish/talks'" class="tab-list">食话</router-link>
    </div>
    <div class="tab-bottom" />
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
    .tab-bottom {
      position: relative;
      top: 22vw;
      .border-bottom-1px(#e7e7e7);
    }
		.user-publish-tab {
      display: flex;
			position: fixed;
			top: 12vw;
			left: 0;
			width: 100%;
			height: 10vw;
			line-height: 10vw;
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
