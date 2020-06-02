<template>
	<div class="wrap challenge">
		<f-main-header message="挑战"></f-main-header>
		<f-challenge-swiper></f-challenge-swiper>
		<f-task></f-task>
	</div>
</template>
<script>
	import fMainHeader from '../common/mainHeader.vue'
	import fChallengeSwiper from './swiper/swiper.vue'
	import fTask from './task/task.vue'

	export default {
		components: {
			'f-main-header': fMainHeader,
			'f-challenge-swiper': fChallengeSwiper,
			'f-task': fTask
		}
	}
</script>
<style lang="less">
	.challenge {
		padding: 40px 0 50px 0;
	}
</style>