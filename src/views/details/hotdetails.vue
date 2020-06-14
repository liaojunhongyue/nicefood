<template>
	<div class="hot-details-wrapper">
		<f-normal-header message="热门专题" historyurl=""></f-normal-header>
		<div class="hot-details">
			<div class="pic">
				<img :src="hotDetails.image" />
				<p class="pic-title">{{ hotDetails.imageTitle }}</p>
				<p class="pic-desc">{{ hotDetails.imageDesc }}</p>
			</div>
			<p class="title">{{ hotDetails.title }}</p>
			<p class="details">{{ hotDetails.details }}</p>
		</div>
	</div>
</template>
<script>
	import fNormalHeader from '@/components/common/normalHeader.vue'

	export default {
		data() {
			return {
				hotData: '',
				hotDetails: '',
				hotId: '',
				hotIndex: ''
			}
		},
		components: {
			'f-normal-header': fNormalHeader
		},
		mounted() {
			this.$http.get('/api/hotData').then((response) => {
				this.hotData = response.data.data;
				this.hotId = this.$route.params.id;
				this.hotIndex = this.hotId - 1;
				this.hotDetails = this.hotData[this.hotIndex];
			})
		}
	}
</script>
<style lang="less">
	.hot-details {
		padding-top: 40px;
		.pic {
			position: relative;
			width: 100%;
			img {
				width: 100%;
			}
			p{
				color: #fff;
				text-shadow: 2px 2px 5px #333;
			}
			.pic-title {
				position: absolute;
				top: 10px;
				left: 10px;
				font-size: 18px;
			}
			.pic-desc {
				position: absolute;
				bottom: 10px;
				right: 10px;
			}
		}
		.title {
			font-size: 20px;
			font-weight: 700;
			padding: 0 10px;
			line-height: 50px;
			color: #333;
			background-color: #fdf4d5;
		}
		.details {
			padding: 10px;
			line-height: 25px;
			text-align: justify;
		}
	}
</style>
