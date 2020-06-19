<template>
  <div class="menu padding">
    <p class="title">每日三餐 · <span id="menuTitle">{{ title }}</span></p>
    <router-link :to="'/menumore/breakfast'" class="more">更多</router-link>
    <div class="menu-meal">
      <swiper ref="mySwiper" :options="swiperOption">
        <swiper-slide v-for="n in 5" :key="n" class="menu-meal-list">
          <div v-for="(item, index) in swiperData.slice(2*n-2,2*n)" :key="index" class="menu-meal-pic">
            <router-link :to="{name: 'fooddetails', params: {id: item.id}}">
              <img :src="item.image">
            </router-link>
          </div>
        </swiper-slide>
        <div slot="pagination" class="menu-list swiper-pagination" />
      </swiper>
    </div>
  </div>
</template>
<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
  components: {
    swiper,
    swiperSlide
  },
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
              case 0: text = '早餐'; break
              case 1: text = '午餐'; break
              case 2: text = '下午茶'; break
              case 3: text = '晚餐'; break
              case 4: text = '夜宵'; break
            }
            return `<p class="${classname}">${text}</p>`
          }
        },
        on: {
          slideChangeTransitionStart: function(title) {
            switch (this.activeIndex) {
              case 0: title = '早餐'; break
              case 1: title = '午餐'; break
              case 2: title = '下午茶'; break
              case 3: title = '晚餐'; break
              case 4: title = '夜宵'; break
            }
          }
        }
      }
    }
  },
  mounted() {
    this.http.get(this.api.query.menuData.url).then((response) => {
      const { code, data } = response.data
      if (code === 0) {
        this.swiperData = data
      } else {
        this.Toast.fail('数据异常')
      }
    })
  }
}
</script>
<style lang="less">
	.menu {
    position: relative;
    background-color: #ffffff;
		.title {
			margin-bottom: 3.4vw;
			font-size: 3.8vw;
			font-weight: 700;
			color: #333;
		}
		.more {
			position: absolute;
			right: 2.3vw;
			top: 2.3vw;
		}
		.menu-meal {
			.swiper-container {
				padding-bottom: 2.3vw;
				.swiper-pagination-bullet {
					bottom: -2.3vw;
					height: 4.6vw;
					color: #777;
					background-color: #fff;
          opacity: 1;
          outline: none;
				}
				.swiper-pagination-bullet-active {
					color: #333;
				}
			}
			.menu-meal-list {
				display: flex;
				.menu-meal-pic {
					&:first-child {
						padding-right: 1.1vw;
					}
					&:last-child {
						padding-left: 1.1vw;
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
			top: 2.3vw;
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
