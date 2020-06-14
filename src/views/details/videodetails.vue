<template>
	<div class="video-details">
		<div class="video-close" @click="goHistory">
			<i class="fa fa-times" aria-hidden="true"></i>
		</div>
		<div class="video-content">
			<div class="video">
				<video :poster="videoDetails.cover" :src="videoDetails.video" controls="controls" autoplay="autoplay"></video>
			</div>
		</div>
	</div>
</template>
<script>
	export default {
		data(){
			return {
				videoData: '',
				videoId: '',
				videoDetails: ''
			}
		},
		mounted(){
			this.$http.get('/api/findData').then((response) => {
				this.videoData = response.data.data.video;
				this.videoId = this.$route.params.id;
				this.videoDetails = this.videoData[this.videoId - 1];
			})
		},
		methods: {
			goHistory: function(){
				this.$router.go(-1);
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
			width: 40px;
			height: 40px;
			text-align: center;
			line-height: 40px;
			z-index: 10;
			i {
				font-size: 20px;
				color: #fff;
			}
		}
		.video-content {
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			display: flex;
			align-items: center;
			justify-content: center;
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
		}
	}
</style>