<template>
  <div class="message-activity">
    <f-normal-header message="活动" historyurl="" />
    <div class="message-activity-list" :class="{blank: isBlank}" />
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
