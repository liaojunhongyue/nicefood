<template>
  <div class="find-tab">
    <router-link :to="'/find/talk'" class="find-tab-list">
      <span class="active">食话</span>
    </router-link>
    <router-link :to="'/find/trends'" class="find-tab-list">
      <span>动态</span>
    </router-link>
    <router-link :to="'/find/activity'" class="find-tab-list">
      <span>活动</span>
    </router-link>
    <router-link :to="'/find/video'" class="find-tab-list">
      <span>视频</span>
    </router-link>
    <router-link :to="'/find/carte'" class="find-tab-list">
      <span>菜单</span>
    </router-link>
    <router-link :to="'/find/topic'" class="find-tab-list">
      <span>专题</span>
    </router-link>
  </div>
</template>
<script>
export default {

}
</script>
<style lang="less">
	.find-tab {
		position: fixed;
		top: 12vw;
		left: 0px;
		width: 100%;
		height: 10vw;
		display: flex;
		padding: 2.3vw;
		padding-bottom: 0px;
		background-color: #fff;
		box-sizing: border-box;
		z-index: 100;
		.find-tab-list {
			flex-grow: 1;
			text-align: center;
			&.router-link-active {
				span {
					border-bottom: 2px solid #ff2323;
				}
			}
			span {
				display: inline-block;
				padding-bottom: 3vw;
			}
		}
	}
</style>
