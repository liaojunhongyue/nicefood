<template>
	<div class="message-collect">
		<f-normal-header message="收藏" historyurl=""></f-normal-header>
		<div class="message-collect-list" :class="{blank: isBlank}">
			
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