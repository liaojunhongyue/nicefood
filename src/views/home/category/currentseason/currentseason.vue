<template>
  <div class="current-season">
    <f-normal-header message="当季食材" historyurl="" />
    <div class="current-season-wrapper">
      <div class="current-season-title">
        <p>当季推荐蔬菜</p>
      </div>
      <ul class="current-season-list">
        <li v-for="item in currentSeasonData" :key="item.id" class="current-season-item">
          <div class="pic">
            <img :src="item.image">
          </div>
          <div class="info">
            <p class="title">{{ item.title }}</p>
            <p class="effect">
              <span class="heat">{{ item.heat }}</span>
              <span v-for="tag in item.tags" :key="tag">{{ tag }}</span>
            </p>
          </div>
        </li>
      </ul>
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
      currentSeasonData: ''
    }
  },
  mounted() {
    this.$http.get('/api/currentSeasonData').then((response) => {
      this.currentSeasonData = response.data.data
    })
  }
}
</script>
<style lang="less">
	.current-season-wrapper {
		padding-top: 40px;
		.current-season-title {
			padding: 0 10px;
			line-height: 35px;
			color: #a7a7a7;
			background-color: #f5f5f5;
		}
		.current-season-list {
			.current-season-item {
				display: flex;
				padding: 10px;
				border-bottom: 1px solid #f5f5f5;
				.pic {
					width: 0;
					flex-grow: 1;
					img {
						width: 100%;
					}
				}
				.info {
					width: 0;
					flex-grow: 2;
					padding-left: 10px;
					.title {
						margin: 7px 0 5px 0;
						font-size: 16px;
						color: #333;
						font-weight: 700;
					}
					.effect {
						span {
							display: inline-block;
							margin: 0 3px 5px 0;
							padding: 2px 10px;
							color: #808080;
							background-color: #ececec;
							&.heat {
								color: #fff;
								background-color: #89d63a;
							}
						}
					}
				}
			}
		}
	}

</style>
