<template>
  <div class="find-trends padding">
    <div class="find-trends-list">
      <div v-for="item in trendsData" :key="item.id" class="find-trends-item">
        <div class="title">
          <i class="fa fa-bullhorn" aria-hidden="true" />
          <span>{{ item.title }}</span>
        </div>
        <div class="pic">
          <img :src="item.image">
        </div>
        <div class="author">
          <div class="avatar">
            <img :src="item.author.avatar">
          </div>
          <div class="name">
            <p>{{ item.author.name }}</p>
          </div>
          <div class="date">
            <p>{{ item.time }}</p>
          </div>
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
      trendsData: ''
    }
  },
  mounted() {
    this.http.get(this.api.query.findData.url).then((response) => {
      this.findData = response.data.data
      this.trendsData = this.findData.trends
    })
  }
}
</script>
<style lang="less">
	.find-trends-item {
		padding: 2.3vw 0;
		.border-bottom-1px(#e7e7e7);
		&:last-child {
			border-bottom: 0;
		}
		.title {
			i {
				font-size: 4.5vw;
				color: #333;
				margin-right: 1.1vw;
			}
			span {
				color: #333;
				font-size: 4vw;
			}
		}
		.pic {
			width: 100%;
			margin-top: 2.3vw;
			img {
				width: 100%;
			}
		}
		.author {
			display: flex;
			padding: 1.2vw 0;
			line-height: 12vw;
			.avatar {
				width: 12vw;
				height: 12vw;
				border-radius: 100vw;
				overflow: hidden;
				img {
					width: 100%;
					height: 100%;
				}
			}
			.name {
				display: flex;
				margin-left: 2.3vw;
				&:after {
					content: '·';
					margin: 0 1.1vw;
				}
			}
		}
	}
</style>
