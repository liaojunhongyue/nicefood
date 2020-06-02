<template>
	<div class="find-carte padding">
		<div class="find-carte-list">
			<div class="find-carte-item" v-for="item in carteData">
				<div class="title">
					<div class="text">
						<p>{{ item.title }}</p>
						<span>{{ item.desc }}</span>
					</div>
					<div class="avatar">
						<img :src="item.avatar" />
					</div>
				</div>
				<div class="pics">
					<div class="pic" v-for="image in item.images">
						<img :src="image" />
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
				carteData: ''
			}
		},
		mounted() {
			this.$http.get('/api/findData').then((response) => {
				this.findData = response.data.data;
				this.carteData = this.findData.carte;
			})
		}
	}
</script>
<style lang="less">
	.find-carte-list {
		.find-carte-item {
			padding: 10px 0;
			border-bottom: 1px solid #e7e7e7;
			&:first-child {
				padding-top: 0px;
			}
			&:last-child {
				border-bottom: 0;
			}
			.title {
				display: flex;
				justify-content: space-between;
				.text {
					line-height: 22px;
					p {
						color: #333;
					}
					span {
						font-size: 12px;
					}
				}
				.avatar {
					img {
						width: 40px;
						height: 40px;
						border-radius: 200px;
						overflow: hidden;
					}
				}
			}
			.pics {
				display: flex;
				flex-wrap: wrap;
				margin-top: 5px;
				.pic {
					width: 33.3%;
					padding: 5px;
					box-sizing: border-box;
					img {
						width: 100%;
					}
				}
			}
		}
	}
</style>