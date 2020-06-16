<template>
  <div class="wrap challenge">
    <f-main-header message="挑战" />
    <f-challenge-swiper />
    <f-task />
  </div>
</template>
<script>
import fMainHeader from '@/components/common/mainHeader.vue'
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
		padding: 12vw 0 12vw 0;
	}
</style>
