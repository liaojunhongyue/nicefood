<template>
  <swiper ref="mySwiper" :options="swiperOption" class="challenge-swiper">
    <swiper-slide v-for="item in bannerData" :key="item.id">
      <img class="pic" :src="item.image">
      <div class="title">
        <p>{{ item.title }}</p>
      </div>
    </swiper-slide>
    <div slot="pagination" class="swiper-pagination" />
  </swiper>
</template>
<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
  components: {
    swiper,
    swiperSlide
  },
  data() {
    return {
      swiperOption: {
        pagination: {
          el: '.swiper-pagination'
        },
        effect: 'flip',
        loop: true
      },
      challengeData: '',
      bannerData: ''
    }
  },
  mounted() {
    this.http.get(this.api.query.challengeData.url).then((response) => {
      this.challengeData = response.data.data
      this.bannerData = this.challengeData.banner
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
			padding: 1.2vw 2.3vw;
			p {
				color: #333;
			}
		}
		.swiper-pagination-bullets {
			bottom: -3.35vw;
		}
	}
</style>
