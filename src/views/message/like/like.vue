<template>
	<div class="message-like">
		<f-normal-header message="点赞" historyurl=""></f-normal-header>
		<div class="message-like-list" :class="{blank: isBlank}">

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
