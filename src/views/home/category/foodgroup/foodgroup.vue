<template>
  <div class="food-group">
    <f-normal-header message="智能组菜" historyurl="" />
    <form id="foodGroup" class="food-group-form">
      <input class="food-item" type="text" placeholder="输入食材">
      <input class="go-foodgroup" type="submit" value="去组菜">
    </form>
  </div>
</template>
<script>
import fNormalHeader from '@/components/common/normalHeader.vue'

export default {
  components: {
    'f-normal-header': fNormalHeader
  }
}
</script>
<style lang="less">
	.food-group {
		padding: 40px 0 0 0;
		.food-group-form {
			padding: 10px;
			.food-item {
				width: 100%;
				height: 30px;
				line-height: 30px;
				padding: 0 10px;
				background-color: #efefef;
				border: 0;
				box-sizing: border-box;
			}
			.go-foodgroup {
				display: block;
				padding: 6px 20px;
				margin: 20px auto 0;
				color: #fff;
				background-color: #ff2323;
				border-radius: 20px;
				border: 0;
				opacity: 0.8;
			}
		}
	}
</style>
