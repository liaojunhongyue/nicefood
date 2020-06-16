<template>
  <div class="user-basket">
    <header class="user-basket-header">
      <div class="go-back" @click="goHistory">
        <i class="fa fa-angle-left" aria-hidden="true" />
      </div>
      我的菜篮
      <div class="clear-draft">
        清空
      </div>
      <div class="header-bottom" />
    </header>
    <div class="user-basket-list" :class="{blank: isBlank}" />
  </div>
</template>
<script>
export default {
  data() {
    return {
      isBlank: true
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
	.user-basket {
		padding: 12vw 0 0 0;
		box-sizing: border-box;
		.user-basket-header {
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
			.clear-draft {
				position: absolute;
				top: 0;
				right: 2.3vw;
				height: 12vw;
				line-height: 12vw;
				color: #333;
			}
		}
	}
</style>
