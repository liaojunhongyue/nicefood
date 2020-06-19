<template>
  <footer>
    <router-link v-for="item in footerDatas" :key="item.name" class="footer-list" :to="item.link" replace>
      <i class="fa" :class="item.icon" aria-hidden="true" />
      <span>{{ item.name }}</span>
    </router-link>
  </footer>
</template>
<script>
export default {
  props: {
    footerDatas: {
      type: Array,
      default: function() {
        return []
      }
    }
  }
}
</script>
<style lang="less">
  footer {
    display: flex;
    position: fixed;
    bottom: 0;
    left: 0;
    height: 12vw;
    width: 100%;
    background-color: #f9f9f9;
    .footer-list {
      flex-grow: 1;
      text-align: center;
      vertical-align: middle;
      i {
        margin: 1.2vw 0 1.2vw 0;
        font-size: 5vw;
        color: #555;
      }
      span {
        display: block;
        font-size: 3.2vw;
        color: #666;
      }
    }
    .router-link-active {
      i {
        color: #ff2323;
      }
      span {
        color: #ff2323;
      }
    }
  }
</style>
