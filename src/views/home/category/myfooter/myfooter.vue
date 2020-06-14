<template>
	<div class="my-footer">
		<f-normal-header message="足迹" historyurl=""></f-normal-header>
		<div class="my-footer-wrapper">
			<router-link :to="{name: 'fooddetails', params: {id: item.id}}" class="user-footprint-list" v-for="item in menuData" v-bind:key="item.id">
				<div class="user-footprint-title">
					<i class="fa fa-circle" aria-hidden="true"></i>
					<p class="title">浏览了这个菜谱</p>
					<p class="date">2018-04-18</p>
				</div>
				<div class="menu-list-item">
					<div class="menu-list-item-box">
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
				</div>
			</router-link>
		</div>
	</div>
</template>
<script>
	import fNormalHeader from '@/components/common/normalHeader.vue'

	export default {
		data() {
			return {
				menuData: ''
			}
		},
		components: {
			'f-normal-header': fNormalHeader
		},
		mounted() {
			this.$http.get('/api/menuData').then((response) => {
				this.menuData = response.data.data;
			})
		}
	}
</script>
<style lang="less">
	.my-footer-wrapper {
		padding: 50px 14px 0 10px;
		background-color: #f9f9f9;
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
				.menu-list-item-box {
					display: flex;
					flex-grow: 1;
					background-color: #fff;
					box-shadow: 0 0 3px #cecece;
				}
				.pic {
					padding: 10px;
				}
			}
		}
	}
</style>
