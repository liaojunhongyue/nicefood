<template>
  <div class="menu-more">
    <f-normal-header message="每日三餐" historyurl="/" />
    <div class="menu-more-tab">
      <router-link :to="{name: 'menubreakfast', params: {tag: 'breakfast'}}" class="menu-more-tab-item"><span>早餐</span></router-link>
      <router-link :to="{name: 'menulunch', params: {tag: 'lunch'}}" class="menu-more-tab-item"><span>午餐</span></router-link>
      <router-link :to="{name: 'menuafternoontea', params: {tag: 'afternoontea'}}" class="menu-more-tab-item"><span>下午茶</span></router-link>
      <router-link :to="{name: 'menudinner', params: {tag: 'dinner'}}" class="menu-more-tab-item"><span>晚餐</span></router-link>
      <router-link :to="{name: 'menumidnight', params: {tag: 'midnight'}}" class="menu-more-tab-item"><span>夜宵</span></router-link>
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
	.menu-more-tab {
    display: flex;
		position: fixed;
		top: 12vw;
		left: 0px;
		width: 100%;
		height: 10vw;
    line-height: 10vw;
		.menu-more-tab-item {
			flex-grow: 1;
			text-align: center;
			span {
				display: inline-block;
				height: 10vw;
				line-height: 10vw;
				box-sizing: border-box;
			}
		}
		.router-link-active {
			span {
				border-bottom: 2px solid #ff2323;
			}
		}
	}
</style>
