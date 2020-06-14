<template>
	<div class="user-point">
		<f-normal-header message="积分明细" historyurl="/user"></f-normal-header>
		<div class="user-point-list" :class="{blank: isBlank}">

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
