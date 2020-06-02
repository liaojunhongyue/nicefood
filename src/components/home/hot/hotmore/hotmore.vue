<template>
	<div class="hot-more">
		<f-normal-header message="热门专题" historyurl=""></f-normal-header>
		<div class="hot-list">
			<router-link :to="{name: 'hotdetails', params: {id: item.id}}" class="hot-list-item" v-for="item in hotData" :key="item.id">
				<div class="pic">
					<img :src="item.image" />
					<p class="pic-title">
						<span class="main-title">{{ item.imageTitle }}</span>
						<span class="sub-title">{{ item.imageDesc }}</span>
					</p>
				</div>
				<p class="title">{{ item.title }}</p>
			</router-link>
		</div>
	</div>
</template>
<script>
	import fNormalHeader from '../../../common/normalHeader.vue'

	export default {
		data() {
			return {
				hotData: ''
			}
		},
		components: {
			'f-normal-header': fNormalHeader
		},
		mounted() {
			this.$http.get('/api/hotData').then((response) => {
				this.hotData = response.data.data;
			})
		}
	}
</script>
<style lang="less">
	.hot-more {
		padding-top: 40px;
		.hot-list {
			padding: 10px;
			.hot-list-item {
				position: relative;
				.pic {
					position: relative;
					img {
						width: 100%;
					}
					.pic-title {
						position: absolute;
						bottom: 10px;
						right: 10px;
						span {
							&.main-title {
								font-weight: 700;
							}
							&.sub-title {
								font-size: 12px;
							}
							display: block;
							color: #fff;
							text-align: right;
							text-shadow: 1px 1px 3px #000;
						}
					}
				}
				&>.title {
					line-height: 27px;
					color: #333;
				}
			}
		}
		
	}
</style>