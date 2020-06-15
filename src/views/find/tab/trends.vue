<template>
	<div class="find-trends padding">
		<div class="find-trends-list">
			<div class="find-trends-item" v-for="item in trendsData" :key="item.id">
				<div class="title">
					<i class="fa fa-bullhorn" aria-hidden="true"></i>
					<span>{{ item.title }}</span>
				</div>
				<div class="pic">
					<img :src="item.image" />
				</div>
				<div class="author">
					<div class="avatar">
						<img :src="item.author.avatar" />
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
			this.$http.get('/api/findData').then((response) => {
				this.findData = response.data.data;
				this.trendsData = this.findData.trends;
			})
		}
	}
</script>
<style lang="less">
	.find-trends-item {
		padding: 10px 0;
		border-bottom: 1px solid #e7e7e7;
		&:last-child {
			border-bottom: 0;
		}
		.title {
			i {
				font-size: 18px;
				color: #333;
				margin-right: 5px;
			}
			span {
				color: #333;
				font-size: 16px;
			}
		}
		.pic {
			width: 100%;
			margin-top: 10px;
			img {
				width: 100%;
			}
		}
		.author {
			display: flex;
			padding: 7px 0;
			line-height: 40px;
			.avatar {
				width: 40px;
				height: 40px;
				border-radius: 200px;
				overflow: hidden;
				img {
					width: 100%;
					height: 100%;
				}
			}
			.name {
				display: flex;
				margin-left: 10px;
				&:after {
					content: '·';
					margin: 0 5px;
				}
			}
		}
	}
</style>
