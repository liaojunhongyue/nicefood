<template>
	<div class="message-comment">
		<f-normal-header message="评论" historyurl=""></f-normal-header>
		<div class="message-comment-list" :class="{blank: isBlank}">

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
