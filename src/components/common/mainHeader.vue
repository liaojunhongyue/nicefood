<template>
  <header class="main-header">
    {{ message }}
    <router-link :to="'/message'" class="message">
      <i class="fa fa-envelope-o" aria-hidden="true" />
    </router-link>
    <div class="header-bottom" />
  </header>
</template>
<script>
export default {
  props: {
    message: {
      type: String,
      default: ''
    }
  }
}
</script>
<style lang="less">
	.main-header {
		position: fixed;
		top: 0px;
		left: 0px;
		width: 100%;
		height: 12vw;
		text-align: center;
		line-height: 12vw;
		font-size: @titleFontSize;
		color: #333;
    background-color: #fff;
    z-index: 100;
    box-sizing: border-box;
		.header-bottom {
      .border-bottom-1px(#e7e7e7);
    }
		.message {
			position: absolute;
			right: 0px;
			top: 0px;
			width: 12vw;
			height: 12vw;
			text-align: center;
			i {
				margin-top: 2.3vw;
				color: #303030;
				font-size: 5vw;
			}
		}
	}
</style>
