<template>
  <div class="hot-details-wrapper">
    <f-normal-header message="热门专题" historyurl="" />
    <div class="hot-details">
      <div class="pic">
        <van-image :src="hotDetails.image">
          <p class="pic-title">{{ hotDetails.imageTitle }}</p>
          <p class="pic-desc">{{ hotDetails.imageDesc }}</p>
        </van-image></div>
      <p class="title">{{ hotDetails.title }}</p>
      <p class="details">{{ hotDetails.details }}</p>
    </div>
  </div>
</template>
<script>
import fNormalHeader from '@/components/common/normalHeader.vue'

export default {
  components: {
    'f-normal-header': fNormalHeader
  },
  data() {
    return {
      hotData: '',
      hotDetails: '',
      hotId: '',
      hotIndex: ''
    }
  },
  mounted() {
    this.http.get(this.api.query.hotData.url).then((response) => {
      const { code, data } = response.data
      if (code === 0) {
        this.hotData = data
        this.hotId = this.$route.params.id
        this.hotIndex = this.hotId - 1
        this.hotDetails = this.hotData[this.hotIndex]
      } else {
        this.Toast.fail('数据异常')
      }
    })
  }
}
</script>
<style lang="less">
	.hot-details {
		padding-top: 12vw;
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
				top: 2.3vw;
				left: 2.3vw;
				font-size: 4vw;
			}
			.pic-desc {
				position: absolute;
				bottom: 2.3vw;
				right: 2.3vw;
			}
		}
		.title {
			font-size: 5.5vw;
			font-weight: 700;
			padding: 0 2.3vw;
			line-height: 15vw;
			color: #333;
			background-color: #fdf4d5;
		}
		.details {
			padding: 2.3vw;
			line-height: 7vw;
			text-align: justify;
		}
	}
</style>
