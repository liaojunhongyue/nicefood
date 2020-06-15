<template>
  <div class="hot-more">
    <f-normal-header message="热门专题" historyurl="" />
    <div class="hot-list">
      <router-link v-for="item in hotData" :key="item.id" :to="{name: 'hotdetails', params: {id: item.id}}" class="hot-list-item">
        <div class="pic">
          <img :src="item.image">
          <p class="pic-title">
            <span class="main-title">{{ item.imageTitle }}</span>
            <span class="sub-title">{{ item.imageDesc }}</span>
          </p>
        </div>
        <p class="title">{{ item.title }}</p>
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
      hotData: ''
    }
  },
  mounted() {
    this.$http.get('/api/hotData').then((response) => {
      this.hotData = response.data.data
    })
  }
}
</script>
<style lang="less">
	.hot-more {
		padding-top: 40px;
		.hot-list {
			padding: 10px;
			.hot-list-item {
				position: relative;
				.pic {
					position: relative;
					img {
						width: 100%;
					}
					.pic-title {
						position: absolute;
						bottom: 10px;
						right: 10px;
						span {
							&.main-title {
								font-weight: 700;
							}
							&.sub-title {
								font-size: 12px;
							}
							display: block;
							color: #fff;
							text-align: right;
							text-shadow: 1px 1px 3px #000;
						}
					}
				}
				&>.title {
					line-height: 27px;
					color: #333;
				}
			}
		}

	}
</style>
