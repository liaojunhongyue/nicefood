<template>
	<div class="message-activity">
		<f-normal-header message="活动" historyurl=""></f-normal-header>
		<div class="message-activity-list" :class="{blank: isBlank}">

		</div>
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

</style>
