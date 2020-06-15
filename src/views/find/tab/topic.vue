<template>
	<div class="find-topic padding">
		<div class="find-topic-list">
			<div class="find-topic-item" v-for="item in topicData" :key="item.id">
				<div class="pic">
					<img :src="item.image" />
					<div class="pic-text">
						<p>{{ item.imageTitle }}</p>
						<span>{{ item.imageDesc }}</span>
					</div>
				</div>
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
			this.$http.get('/api/findData').then((response) => {
				this.findData = response.data.data;
				this.topicData = this.findData.topic;
			})
		}
	}
</script>
<style lang="less">
	.find-topic-list {
		.find-topic-item {
			padding: 10px 0;
			border-bottom: 1px solid #e7e7e7;
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
					right: 10px;
					bottom: 10px;
					p, span {
						color: #fff;
						text-shadow: 1px 1px 3px #000;
					}
					span {
						font-size: 12px;
					}
				}
			}
			.title {
				p {
					margin-top: 10px;
					line-height: 25px;
					color: #333;
				}
			}
		}
	}
</style>
