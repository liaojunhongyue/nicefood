<template>
  <div class="user-point">
    <f-normal-header message="积分明细" historyurl="/user" />
    <div class="user-point-list" :class="{blank: isBlank}" />
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
