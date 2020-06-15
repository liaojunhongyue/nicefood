<template>
  <div class="user-draft">
    <header class="user-draft-header">
      <div class="go-back" @click="goHistory">
        <i class="fa fa-angle-left" aria-hidden="true" />
      </div>
      草稿箱
      <div class="clear-draft">
        清空
      </div>
    </header>
    <div class="user-draft-list" :class="{blank: isBlank}" />
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
	.user-draft {
		padding: 40px 0 0 0;
		box-sizing: border-box;
		.user-draft-header {
			position: fixed;
			top: 0px;
			left: 0px;
			width: 100%;
			height: 40px;
			text-align: center;
			line-height: 40px;
			font-size: 16px;
			color: #333;
			background-color: #fff;
			border-bottom: 1px solid #e7e7e7;
			z-index: 100;
			.go-back {
				position: absolute;
				left: 10px;
				i {
					font-size: 18px;
				}
			}
			.clear-draft {
				position: absolute;
				top: 0;
				right: 10px;
				height: 40px;
				line-height: 40px;
				color: #333;
			}
		}
	}
</style>
