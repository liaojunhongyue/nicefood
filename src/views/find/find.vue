<template>
	<div class="wrap find">
		<f-main-header message="发现"></f-main-header>
		<f-find-tab></f-find-tab>
		<router-view/>
	</div>
</template>
<script>
	import fMainHeader from "@/components/common/mainHeader.vue"
	import fFindTab from "./tab/tab.vue";

	export default {
		components: {
			'f-main-header': fMainHeader,
			'f-find-tab': fFindTab
		}
	}
</script>
<style lang="less">
	.find {
		padding: 80px 0 50px 0;
	}
</style>
