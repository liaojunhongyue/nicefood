<template>
	<div class="message-news">
		<f-normal-header message="消息" historyurl=""></f-normal-header>
		<div class="message-news-list" :class="{blank: isBlank}">
			
		</div>
	</div>
</template>
<script>
	import fNormalHeader from '../../common/normalHeader.vue'

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