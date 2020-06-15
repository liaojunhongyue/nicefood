<template>
  <header class="normal-header">
    <div class="go-back" @click="goHistory">
      <i class="fa fa-angle-left" aria-hidden="true" />
    </div>
    {{ message }}
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
		height: 40px;
		text-align: center;
		line-height: 40px;
		font-size: 16px;
		color: #333;
		background-color: #fff;
		border-bottom: 1px solid #e7e7e7;
		z-index: 100;
		box-sizing: border-box;
		.go-back {
			position: absolute;
			left: 10px;
			i {
				font-size: 18px;
			}
		}
	}
</style>
