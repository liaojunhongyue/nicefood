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
		margin-top: 4.6vw;
		.menu-material-title {
			line-height: 6vw;
			padding: 0 2.3vw;
			font-size: 4.5vw;
			font-weight: 700;
			color: #666;
		}
		.menu-material-list {
			margin-top: 2.3vw;
			.border-top-1px(#e7e7e7);
			.menu-material-item {
				position: relative;
				padding: 2.3vw 0;
				.border-bottom-1px(#e7e7e7);
				box-sizing: border-box;
				overflow: hidden;
				.name {
					float: left;
					width: 45%;
					padding: 0 2.3vw;
          line-height: 6.9vw;
          box-sizing: border-box;
					.border-right-1px(#e7e7e7);
					input {
						width: 100%;
						border: 0;
					}
				}
				.quantity {
					float: left;
					width: 55%;
					padding: 0 2.3vw;
					line-height: 6.9vw;
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
					width: 6.9vw;
					height: 12vw;
					line-height: 12vw;
					text-align: center;
				}
			}
		}
		.menu-material-add {
			line-height: 12vw;
			font-size: 4vw;
			color: #ff2323;
			text-align: center;
		}
	}
</style>
