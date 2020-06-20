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
            <p>{{ item.time | dateFormatToDay }}</p>
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
    this.http.get(this.api.query.findData.url).then((response) => {
      const { code, data } = response.data
      if (code === 0) {
        this.findData = data
        this.videoData = this.findData.video
      } else {
        this.Toast.fail('数据异常')
      }
    })
  }
}
</script>
<style lang="less">
	.find-video-list {
		.find-video-item {
			padding: 2.3vw 0 0.7vw 0;
			.border-bottom-1px(#e7e7e7);
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
					margin-top: -7.5vw;
					margin-left: -7.5vw;
					font-size: 15vw;
					color: #fff;
				}
			}
			.title {
				p {
					font-size: 4vw;
					line-height: 7vw;
					color: #333;
				}
			}
			.author {
				display: flex;
				justify-content: space-between;
				padding: 1.2vw 0;
				line-height: 12vw;
				.avatar-name {
					display: flex;
					img {
						margin-right: 2.3vw;
						width: 12vw;
						height: 12vw;
						border-radius: 100vw;
					}
				}
			}
		}
	}
</style>
