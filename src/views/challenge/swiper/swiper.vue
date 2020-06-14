<template>
	<swiper :options="swiperOption" class="challenge-swiper" ref="mySwiper">
    <swiper-slide v-for="item in bannerData" :key="item.id">
    	<img class="pic" :src="item.image" />
    	<div class="title">
    		<p>{{ item.title }}</p>
    	</div>
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>
<script>
	import 'swiper/dist/css/swiper.css'
	import { swiper, swiperSlide } from 'vue-awesome-swiper'

	export default {
		data() {
			return {
				swiperOption: {
					pagination : {
						el: '.swiper-pagination'
					},
					effect: 'flip',
					loop: true
				},
				challengeData: '',
				bannerData: ''
			}
		},
		components: {
		    swiper,
		    swiperSlide
		},
		mounted() {
			this.$http.get('/api/challengeData').then((response) => {
				this.challengeData = response.data.data;
				this.bannerData = this.challengeData.banner;
			})
		}
	}
</script>
<style lang="less">
	.challenge-swiper {
		.pic {
			width: 100%;
		}
		.title {
			padding: 6px 10px;
			p {
				color: #333;
			}
		}
		.swiper-pagination-bullets {
			bottom: -15px;
		}
	}
</style>