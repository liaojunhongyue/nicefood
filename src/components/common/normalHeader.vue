<template>
  <header class="normal-header">
    <div class="go-back" @click="goHistory">
      <i class="fa fa-angle-left" aria-hidden="true" />
    </div>
    {{ message }}
    <div class="header-bottom" />
  </header>
</template>
<script>
export default {
  props: {
    message: {
      type: String,
      default: ''
    },
    historyurl: {
      type: String,
      default: ''
    }
  },
  methods: {
    goHistory: function() {
      if (this.historyurl !== '') {
        this.$router.replace(this.historyurl)
      } else {
        this.$router.go(-1)
      }
    }
  }
}
</script>
<style lang="less">
	.normal-header {
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
			}
		}
	}
</style>
