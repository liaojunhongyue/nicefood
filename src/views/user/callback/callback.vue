<template>
	<div class="user-callback">
		<f-normal-header message="我的反馈" historyurl="/user"></f-normal-header>
		<div class="user-callback-list" :class="{blank: isBlank}"></div>
	</div>
</template>
<script>
	import fNormalHeader from '@/components/common/normalHeader.vue'

	export default {
		data() {
			return {
				isBlank: true
			}
		},
		components: {
			'f-normal-header': fNormalHeader
		}
	}
</script>
<style lang="less">
	.user-callback {
		padding: 40px 0 0 0;
		box-sizing: border-box;
	}
</style>
