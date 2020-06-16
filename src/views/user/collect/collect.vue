<template>
  <div class="user-collect">
    <header>
      <router-link :to="'/user'" class="go-back">
        <i class="fa fa-angle-left" aria-hidden="true" />
      </router-link>
      <div class="search-collect">
        <i class="fa fa-search" aria-hidden="true" />
        <input type="text" placeholder="搜索你的收藏">
      </div>
      <div class="edit-collect">
        <p>编辑</p>
      </div>
      <div class="header-bottom" />
    </header>
    <div class="user-collect-tab">
      <router-link :to="'/user/collect/all'" class="tab-list">全部收藏</router-link>
      <router-link :to="'/user/collect/my'" class="tab-list">我的菜单</router-link>
      <router-link :to="'/user/collect/menu'" class="tab-list">收藏菜单</router-link>
      <div class="tab-bottom" />
    </div>
    <router-view />
  </div>
</template>
<script>
export default {

}
</script>
<style lang="less">
	.user-collect {
		header {
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
					color: #383838;
					font-size: 5vw;
				}
			}
			.search-collect {
				position: absolute;
				top: 2.5vw;
				left: 12vw;
				right: 12vw;
				height: 7vw;
				background-color: #ececec;
				i {
					position: absolute;
					left: 0;
					top: 0;
					margin: 1.5vw 0 0 2vw;
					background-color: #ececec;
					z-index: 10;
				}
				input[type=text] {
					position: absolute;
					width: 100%;
					left: 0;
					padding-left: 8vw;
					height: 7vw;
					border: 0;
					background-color: #ececec;
					box-sizing: border-box;
				}
			}
			.edit-collect {
				position: absolute;
				right: 0px;
				top: 0px;
				width: 12vw;
				height: 12vw;
				line-height: 12vw;
				text-align: center;
				p {
					color: #ff2323;
				}
			}
		}
		.user-collect-tab {
			position: fixed;
			top: 12vw;
			left: 0;
			width: 100%;
			height: 10vw;
			line-height: 10vw;
			display: flex;
			background-color: #fff;
      z-index: 10;
      .tab-bottom {
        .border-bottom-1px(#e7e7e7);
      }
			.tab-list {
				flex-grow: 1;
				text-align: center;
				border-bottom: 2px solid #fff;
			}
			.router-link-active {
				color: #ff2323;
				border-bottom: 2px solid #ff2323;
			}
		}
	}

</style>
