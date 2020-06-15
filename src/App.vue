<template>
  <div id="app">
    <transition :name="transitionName">
      <router-view class="child-view" />
    </transition>
    <f-footer v-if="foodStyle" />
  </div>
</template>

<script>
import fFooter from './components/common/footer.vue'

export default {
  name: 'App',
  components: {
    'f-footer': fFooter
  },
  data() {
    return {
      transitionName: 'slide-left',
      foodStyle: true
    }
  },
  watch: {
    '$route'(to, from) {
      // 监控footer是否出现
      const currentRoute = to.path
      const currentMainRoute = to.path.split('/')
      if (to.path === '/' ||
          to.path === '/challenge' ||
          to.path === '/user' ||
          currentMainRoute.indexOf('find') !== -1
      ) {
        this.transitionName = 'slide-right'
      } else {
        this.transitionName = 'slide-left'
      }

      if (currentRoute === '/' ||
          currentRoute === '/challenge' ||
          currentRoute === '/user' ||
          currentMainRoute.indexOf('find') !== -1) {
        this.foodStyle = true
      } else {
        this.foodStyle = false
      }
    }
  },
  created() {
    const currentRoute = this.$route.path
    const currentMainRoute = currentRoute.split('/')
    if (currentRoute === '/' ||
        currentRoute === '/challenge' ||
        currentRoute === '/user' ||
        currentMainRoute.indexOf('find') !== -1) {
      this.foodStyle = true
    } else {
      this.foodStyle = false
    }
  }
}
</script>

