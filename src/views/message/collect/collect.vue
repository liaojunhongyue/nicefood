<template>
  <div class="message-collect">
    <f-normal-header message="收藏" historyurl="" />
    <div class="message-collect-list" :class="{blank: isBlank}" />
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

</style>
