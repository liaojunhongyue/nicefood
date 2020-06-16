<template>
  <div class="user-callback">
    <f-normal-header message="我的反馈" historyurl="/user" />
    <div class="user-callback-list" :class="{blank: isBlank}" />
  </div>
</template>
<script>
import fNormalHeader from '@/components/common/normalHeader.vue'

export default {
  components: {
    'f-normal-header': fNormalHeader
  },
  data() {
    return {
      isBlank: true
    }
  }
}
</script>
<style lang="less">
	.user-callback {
		padding: 12vw 0 0 0;
		box-sizing: border-box;
	}
</style>
