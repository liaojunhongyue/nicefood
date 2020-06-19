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
    this.http.get(this.api.query.currentSeasonData.url).then((response) => {
      const { code, data } = response.data
      if (code === 0) {
        this.currentSeasonData = data
      } else {
        this.Toast.fail('数据异常')
      }
    })
  }
}
</script>
<style lang="less">
	.current-season-wrapper {
		padding-top: 12vw;
		.current-season-title {
			padding: 0 2.3vw;
			line-height: 10vw;
			color: #a7a7a7;
			background-color: #f5f5f5;
		}
		.current-season-list {
			.current-season-item {
				display: flex;
				padding: 2.3vw;
				.border-bottom-1px(#f5f5f5);
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
					padding-left: 2.3vw;
					.title {
						margin: 1.2vw 0 1.1vw 0;
						font-size: 4vw;
						color: #333;
						font-weight: 700;
					}
					.effect {
						span {
							display: inline-block;
							margin: 0 0.7vw 1.1vw 0;
							padding: 0.5vw 2.3vw;
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
