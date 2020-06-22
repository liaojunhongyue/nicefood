<template>
  <div class="my-footer">
    <f-normal-header message="足迹" historyurl="" />
    <div class="my-footer-wrapper">
      <router-link v-for="item in menuData" :key="item.id" :to="{name: 'fooddetails', params: {id: item.id}}" class="user-footprint-list">
        <div class="user-footprint-title">
          <i class="fa fa-circle" aria-hidden="true" />
          <p class="title">浏览了这个菜谱</p>
          <p class="date">2018-04-18</p>
        </div>
        <div class="menu-list-item">
          <div class="menu-list-item-box">
            <div class="pic">
              <van-image :src="item.image" /></div>
            <div class="info">
              <p class="title">{{ item.title }}</p>
              <p class="star">
                <i v-for="(star, index) in item.star" :key="index" class="fa fa-star" aria-hidden="true" />
              </p>
              <p class="operate">
                <span class="like">
                  <i class="fa fa-heart-o" aria-hidden="true" />
                  {{ item.like }}
                </span>
                <span class="browse">
                  <i class="fa fa-eye" aria-hidden="true" />
                  {{ item.browse }}
                </span>
              </p>
            </div>
          </div>
        </div>
      </router-link>
    </div>
  </div>
</template>
<script>
import fNormalHeader from '@/components/common/normalHeader.vue'

export default {
  components: {
    'f-normal-header': fNormalHeader
  },
  data() {
    return {
      menuData: ''
    }
  },
  mounted() {
    this.http.get(this.api.query.menuData.url).then((response) => {
      const { code, data } = response.data
      if (code === 0) {
        this.menuData = data
      } else {
        this.Toast.fail('数据异常')
      }
    })
  }
}
</script>
<style lang="less">
	.my-footer-wrapper {
		padding: 14vw 4vw 0 2.3vw;
		background-color: #f9f9f9;
		.user-footprint-list {
			.user-footprint-title {
				overflow: hidden;
				i {
					float: left;
					margin: 1.2vw 1.2vw 0 0;
					font-size: 3.5vw;
					color: #ff2323;
					opacity: 0.6;
				}
				&>.title {
					float: left;
					font-size: 3.2vw;
					color: #333;
				}
				.date {
					float: right;
					font-size: 12px;
				}
			}
			.menu-list-item {
				padding-left: 2.3vw;
				margin-left: 1.1vw;
				border-left: 0.5vw solid #eee;
				.menu-list-item-box {
					display: flex;
					flex-grow: 1;
					background-color: #fff;
					box-shadow: 0 0 3px #cecece;
				}
				.pic {
					padding: 2.3vw;
				}
			}
		}
	}
</style>
