<template>
  <header class="message-header">
    <div class="go-back" @click="goHistory">
      <i class="fa fa-angle-left" aria-hidden="true" />
    </div>
    {{ message }}
    <div class="ignore">
      <p>忽略</p>
    </div>
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
  },
  methods: {
    goHistory: function() {
      this.$router.go(-1)
    }
  }
}
</script>
<style lang="less">
	.message-header {
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
		.go-back {
			position: absolute;
			left: 2.3vw;
			i {
				font-size: 5vw;
				color: #ff6066;
			}
		}
		.ignore {
			position: absolute;
			top: 0;
			right: 0;
			height: 12vw;
			line-height: 12vw;
			width: 12vw;
			text-align: center;
		}
	}
</style>
