<template>
	<div class="new-task">
		<div class="new-task-title">
			<p class="title">新手任务</p>
		</div>
		<div class="new-task-list">
			<div class="new-task-item" v-for="item in taskData" :key="item.id">
				<div class="not-receive-outer">
					<div class="not-receive-inner">
						<p>{{ item.isReceived == 0 ? '未领取' : '已领取' }}</p>
					</div>
				</div>
				<div class="info">
					<div class="pic">
						<img :src="item.image" />
						<div class="pic-mask">
							<p>{{ item.imageTitle }}</p>
						</div>
					</div>
					<div class="title">
						<p>{{ item.title }}</p>
					</div>
				</div>
				<div class="points">
					<i class="fa fa-database" aria-hidden="true"></i>
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
				this.challengeData = response.data.data;
				this.taskData = this.challengeData.task;
			})
		}
	}
</script>
<style lang="less">
	.new-task {
		.new-task-title {
			display: flex;
			justify-content: space-between;
			line-height: 40px;
			padding: 0 10px;
			margin-top: 20px;
			border-top: 10px solid #e7e7e7;
			border-bottom: 1px solid #e7e7e7;
			.title {
				font-size: 16px;
				color: #333;
			}
		}
		.new-task-list {
			.new-task-item {
				position: relative;
				padding-bottom: 10px;
				border-bottom: 1px solid #e7e7e7;
				&:last-child {
					border-bottom: 0;
				}
				overflow: hidden;
				.not-receive-outer {
					position: absolute;
					top: -20px;
					right: -20px;
					width: 80px;
					height: 80px;
					border-radius: 500px;
					border: 5px solid #ff2323;
					opacity: 0.6;
					.not-receive-inner {
						position: absolute;
						top: 3px;
						right: 3px;
						width: 70px;
						height: 70px;
						border-radius: 500px;
						border: 1px solid #ff2323;
						p {
							line-height: 75px;
							color: #ff2323;
							font-weight: 700;
							text-align: center;
						}
					}
				}
			}
			.info {
				display: flex;
				padding: 10px;
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
							font-size: 16px;
							color: #fff;
						}
					}
				}
				.title {
					flex-grow: 1.5;
					width: 0;
					padding: 5px 10px;
					p {
						color: #333;
						font-size: 16px;
					}
				}
			}
			.points {
				padding: 0 10px;
				line-height: 25px;
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
