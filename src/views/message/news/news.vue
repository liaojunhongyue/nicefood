<template>
  <div class="message-news">
    <f-normal-header message="消息" historyurl="" />
    <div class="message-news-list" :class="{blank: isBlank}" />
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
