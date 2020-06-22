<template>
  <div class="video-details">
    <div class="video-close" @click="goHistory">
      <i class="fa fa-times" aria-hidden="true" />
    </div>
    <videoDetails :cover="videoDetails.cover" :video-src="videoDetails.video" />
  </div>
</template>
<script>
import videoDetails from '@/components/video/video'
export default {
  components: {
    videoDetails
  },
  data() {
    return {
      videoData: '',
      videoId: '',
      videoDetails: ''
    }
  },
  mounted() {
    this.http.get(this.api.query.findData.url).then((response) => {
      const { code, data } = response.data
      if (code === 0) {
        this.videoData = data.video
        this.videoId = this.$route.params.id
        this.videoDetails = this.videoData[this.videoId - 1]
      } else {
        this.Toast.fail('数据异常')
      }
    })
  },
  methods: {
    goHistory: function() {
      this.$router.go(-1)
    }
  }
}
</script>
<style lang="less">
	.video-details {
		width: 100%;
		height: 100%;
		background-color: rgba(0,0,0,0.8);
		box-sizing: border-box;
		.video-close {
			position: absolute;
			top: 0;
			left: 0;
			width: 12vw;
			height: 12vw;
			text-align: center;
			line-height: 12vw;
			z-index: 10;
			i {
				font-size: 5vw;
				color: #fff;
			}
		}

	}
</style>
