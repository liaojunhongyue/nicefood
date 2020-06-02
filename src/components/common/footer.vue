<template>
  <footer>
    <router-link class="footer-list" :to="'/'" replace exact>
      <i class="fa fa-shopping-basket" aria-hidden="true"></i>
      <span>首页</span>
    </router-link>
    <router-link class="footer-list" :to="'/find'" replace>
      <i class="fa fa-camera" aria-hidden="true"></i>
      <span>发现</span>
    </router-link>
    <router-link class="footer-list" :to="'/challenge'" replace>
      <i class="fa fa-cutlery" aria-hidden="true"></i>
      <span>挑战</span>
    </router-link>
    <router-link class="footer-list" :to="'/user'" replace>
      <i class="fa fa-user-circle-o" aria-hidden="true"></i>
      <span>我的</span>
    </router-link>
  </footer>
</template>
<script>
  export default {
    
  }
</script>
<style lang="less">
  footer {
    display: flex;
    position: fixed;
    bottom: 0;
    left: 0;
    height: 50px;
    width: 100%;
    background-color: #f9f9f9;
    .footer-list {
      flex-grow: 1;
      text-align: center;
      vertical-align: middle;
      i {
        margin-top: 9px;
        font-size: 18px;
        color: #555;
      }
      span {
        display: block;
        font-size: 12px;
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