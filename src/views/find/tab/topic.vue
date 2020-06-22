<template>
  <div class="find-topic padding">
    <div class="find-topic-list">
      <div v-for="item in topicData" :key="item.id" class="find-topic-item">
        <div class="pic">
          <van-image :src="item.image">
            <div class="pic-text">
              <p>{{ item.imageTitle }}</p>
              <span>{{ item.imageDesc }}</span>
            </div>
          </van-image></div>
        <div class="title">
          <p>{{ item.title }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      findData: '',
      topicData: ''
    }
  },
  mounted() {
    this.http.get(this.api.query.findData.url).then((response) => {
      const { code, data } = response.data
      if (code === 0) {
        this.findData = data
        this.topicData = this.findData.topic
      } else {
        this.Toast.fail('数据异常')
      }
    })
  }
}
</script>
<style lang="less">
	.find-topic-list {
		.find-topic-item {
			padding: 2.3vw 0;
			.border-bottom-1px(#e7e7e7);
			&:first-child {
				padding-top: 0px;
			}
			&:last-child {
				border-bottom: 0;
			}
			.pic {
				position: relative;
				img {
					width: 100%;
				}
				.pic-text {
					position: absolute;
					right: 2.3vw;
					bottom: 2.3vw;
					p, span {
						color: #fff;
						text-shadow: 1px 1px 3px #000;
					}
					span {
						font-size: 3.2vw;
					}
				}
			}
			.title {
				p {
					margin-top: 2.3vw;
					line-height: 5.5vw;
					color: #333;
				}
			}
		}
	}
</style>
