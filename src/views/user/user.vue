<template>
  <div class="wrap user">
    <div class="user-header">
      <div class="user-header-mask" />
      <div class="user-operate">
        <router-link :to="'/settings'">
          <i class="fa fa-cog" aria-hidden="true" />
        </router-link>
        <router-link :to="'/message'">
          <i class="fa fa-envelope-o" aria-hidden="true" />
        </router-link>
      </div>
      <div class="user-avatar">
        <img src="../../../static/upload/avatar.jpg">
      </div>
      <div class="user-info">
        <p class="name">路很长（来自微信...）</p>
        <p class="slogan">正在通往美食达人的路上...</p>
        <p class="fans">关注1 · 粉丝0</p>
      </div>
    </div>
    <div class="user-menu">
      <router-link :to="'/user/collect/all'" class="user-menu-list">
        <i class="fa fa-heart-o" aria-hidden="true" />
        <span>收藏</span>
      </router-link>
      <router-link :to="'/user/publish/menu'" class="user-menu-list">
        <i class="fa fa-pencil-square-o" aria-hidden="true" />
        <span>发布</span>
      </router-link>
      <router-link :to="'/user/task/unfinished'" class="user-menu-list">
        <i class="fa fa-folder-o" aria-hidden="true" />
        <span>任务</span>
      </router-link>
      <router-link :to="'/user/point'" class="user-menu-list">
        <i class="fa fa-graduation-cap" aria-hidden="true" />
        <span>积分</span>
      </router-link>
      <router-link :to="'/user/draft'" class="user-menu-list">
        <i class="fa fa-folder-open-o" aria-hidden="true" />
        <span>草稿</span>
      </router-link>
      <router-link :to="'/user/basket'" class="user-menu-list">
        <i class="fa fa-shopping-basket" aria-hidden="true" />
        <span>菜篮</span>
      </router-link>
      <router-link :to="'/user/comment/menu'" class="user-menu-list">
        <i class="fa fa-commenting" aria-hidden="true" />
        <span>评论</span>
      </router-link>
      <router-link :to="'/user/callback'" class="user-menu-list">
        <i class="fa fa-bullhorn" aria-hidden="true" />
        <span>反馈</span>
      </router-link>
    </div>
    <div class="user-footprint">
      <p class="title">我的美食足迹</p>
      <router-link v-for="item in browseData" :key="item.id" :to="{name: 'fooddetails', params: {id: item.id}}" class="user-footprint-list">
        <div class="user-footprint-title">
          <i class="fa fa-circle" aria-hidden="true" />
          <p class="title">浏览了这个菜谱</p>
          <p class="date">2018-04-18</p>
        </div>
        <div class="menu-list-item">
          <div class="pic">
            <img :src="item.image">
          </div>
          <div class="info">
            <p class="title">{{ item.title }}</p>
            <p class="star">
              <i v-for="(star, index) in item.star" :key="index" class="fa fa-star" aria-hidden="true" />
            </p>
            <p class="operate">
              <span class="like">
                <i class="fa fa-heart-o" aria-hidden="true" />
                {{ item.like }}
              </span>
              <span class="browse">
                <i class="fa fa-eye" aria-hidden="true" />
                {{ item.browse }}
              </span>
            </p>
          </div>
        </div>
      </router-link>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      browseData: ''
    }
  },
  mounted() {
    this.http.get(this.api.query.menuData.url).then((response) => {
      const { code, data } = response.data
      if (code === 0) {
        this.browseData = data
      } else {
        this.Toast.fail('数据异常')
      }
    })
  }
}
</script>
<style lang="less">
.user {
	padding: 0 0 12vw 0;
	.user-header {
		position: relative;
		width: 100%;
		height: 45vw;
		background: url('../../../static/images/userbg.jpg') center center no-repeat;
		background-size: cover;
		.user-header-mask {
			position: absolute;
			top: 0px;
			left: 0px;
			width: 100%;
			height: 100%;
			background-color: #000;
			opacity: 0.7;
		}
		.user-operate {
			position: absolute;
			top: 2.3vw;
			right: 2.3vw;
			z-index: 1;
			i {
				color: #fff;
				font-size: 5vw;
				&.fa-cog {
					margin-right: 3.35vw;
				}
			}
		}
		.user-avatar {
			position: relative;
			top: 12vw;
			left: 5vw;
			width: 24vw;
			height: 24vw;
			border-radius: 100vw;
			overflow: hidden;
			img {
				width: 100%;
				height: 100%;
			}
		}
		.user-info {
			position: relative;
			top: -6.9vw;
			margin-left: 36vw;
			* {
				color: #fff;
			}
			.name {
				font-size: 4vw;
			}
			.slogan {
				margin-top: 2.3vw;
				font-size: 3.2vw;
				color: #ccc;
			}
			.fans {
				margin-top: 1.1vw;
			}
		}
	}
	.user-menu {
		display: flex;
		flex-wrap: wrap;
		padding: 2.3vw;
		.user-menu-list {
			width: 25%;
			margin-top: 2.3vw;
			text-align: center;
			* {
				color: #666;
			}
			i {
				font-size: 4.5vw;
			}
			span {
				display: block;
			}
		}
	}
	.user-footprint {
		padding: 2.3vw;
		&>.title {
			margin-bottom: 2.3vw;
			font-size: 4vw;
			color: #333;
		}
		.user-footprint-list {
			.user-footprint-title {
				overflow: hidden;
				i {
					float: left;
					margin: 1.1vw 1.1vw 0 0;
					font-size: 3.2vw;
					color: #ff2323;
					opacity: 0.6;
				}
				&>.title {
					float: left;
					font-size: 3.2vw;
					color: #333;
				}
				.date {
					float: right;
					font-size: 3.2vw;
				}
			}
			.menu-list-item {
				padding-left: 2.3vw;
				margin-left: 1vw;
				border-left: 2px solid #eee;
			}
		}
	}
}

</style>
