<template>
  <div class="new-task">
    <div class="new-task-title">
      <p class="title">新手任务</p>
    </div>
    <div class="new-task-list">
      <div v-for="item in taskData" :key="item.id" class="new-task-item">
        <div class="not-receive-outer">
          <div class="not-receive-inner">
            <p>{{ item.isReceived == 0 ? '未领取' : '已领取' }}</p>
          </div>
        </div>
        <div class="info">
          <div class="pic">
            <img :src="item.image">
            <div class="pic-mask">
              <p>{{ item.imageTitle }}</p>
            </div>
          </div>
          <div class="title">
            <p>{{ item.title }}</p>
          </div>
        </div>
        <div class="points">
          <i class="fa fa-database" aria-hidden="true" />
          <span>奖励：{{ item.points }}积分</span>
          <span class="state">{{ item.isFinished == 1 ? '进行中' : '已完成' }}</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      challengeData: '',
      taskData: ''
    }
  },
  mounted() {
    this.$http.get('/api/challengeData').then((response) => {
      this.challengeData = response.data.data
      this.taskData = this.challengeData.task
    })
  }
}
</script>
<style lang="less">
	.new-task {
		.new-task-title {
			display: flex;
			justify-content: space-between;
			line-height: 12vw;
			padding: 0 2.3vw;
			margin-top: 4.6vw;
			border-top: 2.3vw solid #e7e7e7;
			.border-bottom-1px(#e7e7e7);
			.title {
				font-size: 4vw;
				color: #333;
			}
		}
		.new-task-list {
			.new-task-item {
				position: relative;
				padding-bottom: 2.3vw;
				.border-bottom-1px(#e7e7e7);
				&:last-child {
					border-bottom: 0;
				}
				overflow: hidden;
				.not-receive-outer {
					position: absolute;
					top: -5.5vw;
					right: -5.5vw;
					width: 22vw;
					height: 22vw;
					border-radius: 100vw;
					border: 1vw solid #ff2323;
					opacity: 0.6;
					.not-receive-inner {
						position: absolute;
						top: 0.8vw;
						right: 0.8vw;
						width: 19vw;
						height: 19vw;
						border-radius: 100vw;
						border: 1px solid #ff2323;
						p {
							line-height: 20vw;
							color: #ff2323;
							font-weight: 700;
							text-align: center;
						}
					}
				}
			}
			.info {
				display: flex;
				padding: 2.3vw;
				overflow: hidden;
				.pic {
					position: relative;
					width: 0;
					flex-grow: 1;
					img {
						width: 100%;
					}
					.pic-mask {
						display: flex;
						justify-content: center;
						align-items: center;
						position: absolute;
						top: 0px;
						left: 0px;
						width: 100%;
						height: 100%;
						background-color: #000;
						opacity: 0.5;
						p {
							font-size: 4vw;
							color: #fff;
						}
					}
				}
				.title {
					flex-grow: 1.5;
					width: 0;
					padding: 1.1vw 2.3vw;
					p {
						color: #333;
						font-size: 4vw;
					}
				}
			}
			.points {
				padding: 0 2.3vw;
				line-height: 6vw;
				overflow: hidden;
				* {
					color: #debc5a;
				}
				.state {
					float: right;
				}
			}
		}
	}
</style>
