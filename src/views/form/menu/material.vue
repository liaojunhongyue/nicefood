<template>
  <li class="menu-material-item">
    <div class="name">
      <input type="text" name="" placeholder="材料名称">
    </div>
    <div class="quantity">
      <input type="text" name="" placeholder="用量">
    </div>
    <div class="delete-item">
      <i class="fa fa-times" aria-hidden="true" @click="removeMaterial" />
    </div>
  </li>
</template>
<script>
export default {
  props: {
    datas: {
      type: String,
      default: ''
    },
    dataindex: {
      type: Number,
      default: 0
    }
  },
  methods: {
    removeMaterial: function() {
      const datasLength = this.datas.length
      if (datasLength <= 1) {
        return false
      }
    }
  }
}
</script>
<style lang="less">
	.menu-material {
		margin-top: 20px;
		.menu-material-title {
			line-height: 25px;
			padding: 0 10px;
			font-size: 18px;
			font-weight: 700;
			color: #666;
		}
		.menu-material-list {
			margin-top: 10px;
			border-top: 1px solid #e7e7e7;
			.menu-material-item {
				position: relative;
				padding: 10px 0;
				border-bottom: 1px solid #e7e7e7;
				box-sizing: border-box;
				overflow: hidden;
				.name {
					float: left;
					width: 45%;
					padding: 0 10px;
					line-height: 30px;
					border-right: 1px solid #e7e7e7;
					box-sizing: border-box;
					input {
						width: 100%;
						border: 0;
					}
				}
				.quantity {
					float: left;
					width: 55%;
					padding: 0 10px;
					line-height: 30px;
					box-sizing: border-box;
					input {
						width: 100%;
						border: 0;
					}
				}
				.delete-item {
					position: absolute;
					right: 0;
					top: 0;
					width: 30px;
					height: 50px;
					line-height: 50px;
					text-align: center;
				}
			}
		}
		.menu-material-add {
			line-height: 45px;
			font-size: 16px;
			color: #ff2323;
			text-align: center;
		}
	}
</style>
