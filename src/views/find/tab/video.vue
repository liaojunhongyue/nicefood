<template>
  <div class="find-video padding">
    <div class="find-video-list">
      <router-link v-for="item in videoData" :key="item.id" :to="{name: 'videodetails', params: {id: item.id}}" class="find-video-item">
        <div class="video">
          <video
            :poster="item.cover"
            :src="item.video"
          />
          <i class="fa fa-play-circle" aria-hidden="true" />
        </div>
        <div class="title">
          <p>{{ item.title }}</p>
        </div>
        <div class="author">
          <div class="avatar-name">
            <img :src="item.author.avatar">
            <p>{{ item.author.name }}</p>
          </div>
          <div class="date">
            <p>{{ item.time }}</p>
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
      findData: '',
      videoData: ''
    }
  },
  mounted() {
    this.$http.get('/api/findData').then((response) => {
      this.findData = response.data.data
      this.videoData = this.findData.video
    })
  }
}
</script>
<style lang="less">
	.find-video-list {
		.find-video-item {
			padding: 10px 0 3px 0;
			border-bottom: 1px solid #e7e7e7;
			&:first-child {
				padding-top: 0px;
			}
			&:last-child {
				border-bottom: 0;
			}
			.video {
				position: relative;
				video {
					width: 100%;
				}
				i {
					position: absolute;
					top: 50%;
					left: 50%;
					margin-top: -23px;
					margin-left: -20px;
					font-size: 46px;
					color: #fff;
				}
			}
			.title {
				p {
					font-size: 16px;
					line-height: 25px;
					color: #333;
				}
			}
			.author {
				display: flex;
				justify-content: space-between;
				padding: 7px 0;
				line-height: 40px;
				.avatar-name {
					display: flex;
					img {
						margin-right: 10px;
						width: 40px;
						height: 40px;
						border-radius: 200px;
					}
				}
			}
		}
	}
</style>
