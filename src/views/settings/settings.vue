<template>
  <div class="settings">
    <f-normal-header message="设置" />
    <div class="settingsContent">
      <div class="list">
        <div class="item">
          <p>关于我们</p>
        </div>
      </div>
      <div class="logout" @click="logout()">
        <p>退出登录</p>
      </div>
    </div>
  </div>
</template>
<script>
import fNormalHeader from '@/components/common/normalHeader.vue'
export default {
  components: {
    fNormalHeader
  },
  data() {
    return {
      logoutTimer: null
    }
  },
  beforeDestroy() {
    window.clearTimeout(this.logoutTimer)
  },
  methods: {
    logout() {
      this.http.post(this.api.user.logout.url).then((response) => {
        const self = this
        this.Toast('您已成功退出登录')
        this.$store.commit('setUserToken', null)
        this.logoutTimer = window.setTimeout(() => {
          self.$router.push('/home')
        }, 1000)
      })
    }
  }
}
</script>
<style lang="less" scoped>
.settingsContent {
  padding: 12vw 0 0 0;
  .list {
    .item {
      padding: 0 2.3vw;
      height: 12vw;
      line-height: 12vw;
      background-color: #ffffff;
      .border-bottom-1px(#e9e9e9);
    }
  }
  .logout {
    margin: 3vw auto;
    width: 95vw;
    height: 12vw;
    line-height: 12vw;
    text-align: center;
    color: @themeColor;
    background-color: #ffffff;
    .border-1px(@themeColor, 3vw);
  }
}
</style>
