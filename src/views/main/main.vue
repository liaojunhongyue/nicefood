<template>
  <div id="main">
    <transition :name="transitionName">
      <router-view class="child-view" />
    </transition>
    <f-footer :footer-datas="footerDatas" />
  </div>
</template>
<script>
import fFooter from '@/components/common/footer.vue'
export default {
  components: {
    'f-footer': fFooter
  },
  data() {
    return {
      transitionName: 'slide-left',
      footerDatas: [
        {
          name: '首页',
          icon: 'fa-shopping-basket',
          link: '/'
        },
        {
          name: '发现',
          icon: 'fa-camera',
          link: '/find/talk/newtab'
        },
        {
          name: '挑战',
          icon: 'fa-cutlery',
          link: '/challenge'
        },
        {
          name: '我的',
          icon: 'fa-user-circle-o',
          link: '/user'
        }
      ]
    }
  }
}
</script>
<style lang="less" scoped>
#main {
  height: 100%;
  overflow: auto;
}
</style>
