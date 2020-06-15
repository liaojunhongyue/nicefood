<template>
	<div class="menu padding">
		<p class="title">每日三餐 · <span id="menuTitle">{{ title }}</span></p>
		<router-link :to="'/menumore/breakfast'" class="more">更多</router-link>
		<div class="menu-meal">
			<swiper :options="swiperOption" ref="mySwiper">
				<swiper-slide class="menu-meal-list" v-for="n in 5" v-bind:key="n">
					<div v-for="(item, index) in swiperData.slice(2*n-2,2*n)" :key="index" class="menu-meal-pic">
						<router-link :to="{name: 'fooddetails', params: {id: item.id}}">
							<img :src="item.image" />
						</router-link>
					</div>
				</swiper-slide>
				<div class="menu-list swiper-pagination" slot="pagination"></div>
			</swiper>
		</div>
	</div>
</template>
<script>
	import 'swiper/dist/css/swiper.css'
	import { swiper, swiperSlide } from 'vue-awesome-swiper'

	export default {
		data() {
			return {
				title: '早餐',
				swiperData: '',
				swiperOption: {
					pagination: {
						el: '.swiper-pagination',
						clickable: true,
						renderBullet: function(index, classname, text) {
							switch (index) {
								case 0: text = '早餐'; break;
								case 1: text = '午餐'; break;
								case 2: text = '下午茶'; break;
								case 3: text = '晚餐'; break;
								case 4: text = '夜宵'; break;
							}
							return '<p class="' + classname + '">' + text + '</p>';
						}
					},
					on: {
						slideChangeTransitionStart: function(title){
							let titleObj = document.getElementById('menuTitle');
					      	switch (this.activeIndex) {
					      		case 0: titleObj.innerHTML = '早餐'; break;
								case 1: titleObj.innerHTML = '午餐'; break;
								case 2: titleObj.innerHTML = '下午茶'; break;
								case 3: titleObj.innerHTML = '晚餐'; break;
								case 4: titleObj.innerHTML = '夜宵'; break;
					      	}
					    }
					}
				}
			}
		},
		mounted() {
			this.$http.get('/api/menuData').then((response) => {
				this.swiperData = response.data.data;
			})
		},
		components: {
	    swiper,
	    swiperSlide
	  }
	}
</script>
<style lang="less">
	.menu {
		position: relative;
		.title {
			margin-bottom: 16px;
			font-size: 16px;
			font-weight: 700;
			color: #333;
		}
		.more {
			position: absolute;
			right: 10px;
			top: 10px;
		}
		.menu-meal {
			.swiper-container {
				padding-bottom: 10px;
				.swiper-pagination-bullet {
					bottom: -10px;
					height: 20px;
					color: #777;
					background-color: #fff;
					opacity: 1;
				}
				.swiper-pagination-bullet-active {
					color: #333;
				}
			}
			.menu-meal-list {
				display: flex;
				.menu-meal-pic {
					&:first-child {
						padding-right: 5px;
					}
					&:last-child {
						padding-left: 5px;
					}
					flex-grow: 1;
					width: 0;
					img {
						width: 100%;
					}
				}
			}
		}
		.menu-list {
			display: flex;
			position: relative;
			top: 10px;
			text-align: center;
			p {
				flex-grow: 1;
				&.active {
					color: #333;
				}
			}
		}
	}
</style>
