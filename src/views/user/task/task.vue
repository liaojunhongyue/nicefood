<template>
  <div class="user-task">
    <f-normal-header message="我的任务" historyurl="/user" />
    <ul class="user-task-tab">
      <router-link class="tab-item" :to="'/user/task/unfinished'"><span>未完成</span></router-link>
      <router-link class="tab-item" :to="'/user/task/finished'"><span>已完成</span></router-link>
    </ul>
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
	.user-task {
		padding: 12vw 0 0 0;
		box-sizing: border-box;
		.user-task-tab {
			position: fixed;
			left: 0;
			top: 12vw;
			display: flex;
			width: 100%;
			height: 10vw;
			line-height: 10vw;
			.tab-item {
				flex-grow: 1;
				width: 0;
				text-align: center;
				span {
					display: inline-block;
					height: 10vw;
					line-height: 10vw;
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
