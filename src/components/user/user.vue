<template>
	<div class="wrap user">
		<div class="user-header">
			<div class="user-header-mask"></div>
			<div class="user-operate">
				<!-- <i class="fa fa-cog" aria-hidden="true"></i> -->
				<router-link :to="'/message'">
					<i class="fa fa-envelope-o" aria-hidden="true"></i>
				</router-link>
			</div>
			<div class="user-avatar">
				<img src="/static/upload/avatar.jpg" />
			</div>
			<div class="user-info">
				<p class="name">路很长（来自微信...）</p>
				<p class="slogan">正在通往美食达人的路上...</p>
				<p class="fans">关注1 · 粉丝0</p>
			</div>
		</div>
		<div class="user-menu">
			<router-link :to="'/user/collect/all'" class="user-menu-list">
				<i class="fa fa-heart-o" aria-hidden="true"></i>
				<span>收藏</span>
			</router-link>
			<router-link :to="'/user/publish/menu'" class="user-menu-list">
				<i class="fa fa-pencil-square-o" aria-hidden="true"></i>
				<span>发布</span>
			</router-link>
			<router-link :to="'/user/task/unfinished'" class="user-menu-list">
				<i class="fa fa-folder-o" aria-hidden="true"></i>
				<span>任务</span>
			</router-link>
			<router-link :to="'/user/point'" class="user-menu-list">
				<i class="fa fa-graduation-cap" aria-hidden="true"></i>
				<span>积分</span>
			</router-link>
			<router-link :to="'/user/draft'" class="user-menu-list">
				<i class="fa fa-folder-open-o" aria-hidden="true"></i>
				<span>草稿</span>
			</router-link>
			<router-link :to="'/user/basket'" class="user-menu-list">
				<i class="fa fa-shopping-basket" aria-hidden="true"></i>
				<span>菜篮</span>
			</router-link>
			<router-link :to="'/user/comment/menu'" class="user-menu-list">
				<i class="fa fa-commenting" aria-hidden="true"></i>
				<span>评论</span>
			</router-link>
			<router-link :to="'/user/callback'" class="user-menu-list">
				<i class="fa fa-bullhorn" aria-hidden="true"></i>
				<span>反馈</span>
			</router-link>
		</div>
		<div class="user-footprint">
			<p class="title">我的美食足迹</p>
			<router-link :to="{name: 'fooddetails', params: {id: item.id}}" :key="item.id" class="user-footprint-list" v-for="item in browseData">
				<div class="user-footprint-title">
					<i class="fa fa-circle" aria-hidden="true"></i>
					<p class="title">浏览了这个菜谱</p>
					<p class="date">2018-04-18</p>
				</div>
				<div class="menu-list-item">
					<div class="pic">
						<img :src="item.image" />
					</div>
					<div class="info">
						<p class="title">{{ item.title }}</p>
						<p class="star">
							<i class="fa fa-star" aria-hidden="true" v-for="star in item.star"></i>
						</p>
						<p class="operate">
							<span class="like">
								<i class="fa fa-heart-o" aria-hidden="true"></i>
								{{ item.like }}
							</span>
							<span class="browse">
								<i class="fa fa-eye" aria-hidden="true"></i>
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
			this.$http.get('/api/menuData').then((response) => {
				this.browseData = response.data.data;
			})
		}
	}
</script>
<style lang="less">
.user {
	padding: 0 0 50px 0;
	.user-header {
		position: relative;
		width: 100%;
		height: 150px;
		background: url('/static/images/userbg.jpg') center center no-repeat;
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
			top: 10px;
			right: 10px;
			z-index: 1;
			i {
				color: #fff;
				font-size: 20px;
				&.fa-cog {
					margin-right: 15px;
				}
			}
		}
		.user-avatar {
			position: relative;
			top: 50px;
			left: 20px;
			width: 80px;
			height: 80px;
			border-radius: 300px;
			overflow: hidden;
			img {
				width: 100%;
				height: 100%;
			}
		}
		.user-info {
			position: relative;
			top: -30px;
			margin-left: 120px;
			* {
				color: #fff;
			}
			.name {
				font-size: 16px;
			}
			.slogan {
				margin-top: 10px;
				font-size: 12px;
				color: #ccc;
			}
			.fans {
				margin-top: 5px;
			}
		}
	}
	.user-menu {
		display: flex;
		flex-wrap: wrap;
		padding: 10px;
		.user-menu-list {
			width: 25%;
			margin-top: 10px;
			text-align: center;
			* {
				color: #666;
			}
			i {
				font-size: 18px;
			}
			span {
				display: block;
			}
		}
	}
	.user-footprint {
		padding: 10px;
		&>.title {
			margin-bottom: 10px;
			font-size: 16px;
			color: #333;
		}
		.user-footprint-list {
			.user-footprint-title {
				overflow: hidden;
				i {
					float: left;
					margin: 5px 5px 0 0;
					font-size: 12px;
					color: #ff2323;
					opacity: 0.6;
				}
				&>.title {
					float: left;
					font-size: 12px;
					color: #333;
				}
				.date {
					float: right;
					font-size: 12px;
				}
			}
			.menu-list-item {
				padding-left: 10px;
				margin-left: 4px;
				border-left: 2px solid #eee;
			}
		}
	}
}
	
</style>