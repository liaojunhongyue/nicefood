<template>
  <div class="food-category">
    <f-normal-header message="菜谱分类" historyurl="" />
    <div class="food-category-all">
      <div ref="mainCategory" class="main-category">
        <ul>
          <li v-for="item in foodCategoryData" :key="item.id" class="main-category-item">
            {{ item.mainCate }}
          </li>
        </ul>
      </div>
      <div class="sub-category">
        <div v-for="item in foodCategoryData" :key="item.id" class="sub-category-list">
          <div v-for="list in item.list" :key="list.id">
            <div v-if="list.secondTitle != null" class="sub-category-title">
              <div class="line" />
              <div class="text">{{ list.secondTitle }}</div>
              <div class="line" />
            </div>
            <ul>
              <li v-for="text in list.listText" :key="text" class="sub-category-item"><p>{{ text }}</p></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import BScroll from 'better-scroll'
import fNormalHeader from '@/components/common/normalHeader.vue'

export default {
  components: {
    'f-normal-header': fNormalHeader
  },
  data() {
    return {
      foodCategoryData: ''
    }
  },
  created() {
    this.$nextTick(() => {
      this._initScroll()
    })
  },
  mounted() {
    this.http.get(this.api.query.foodCategoryData.url).then((response) => {
      const { code, data } = response.data
      if (code === 0) {
        this.foodCategoryData = data
      } else {
        this.Toast.fail('数据异常')
      }
    })
  },
  methods: {
    _initScroll: function() {
      this.scroll = new BScroll(this.$refs.mainCategory, {
        mouseWheel: { // 配置PC端滑动
          speed: 20,
          invert: false
        }
      })
    }
  }
}
</script>
<style lang="less">
	.food-category {
		padding-top: 12vw;
		height: 100%;
		box-sizing: border-box;
		.food-category-all {
			height: 100%;
			box-sizing: border-box;
			.main-category {
				float: left;
				width: 100px;
				height: 100%;
				text-align: center;
				.border-right-1px(#e7e7e7);
				box-sizing: border-box;
				overflow: hidden;
				.main-category-item {
					padding: 4.6vw 0;
					&.active {
						color: #ff2323;
						font-weight: 700;
						background-color: #f5f5f5;
					}
				}
			}
			.sub-category {
				height: 100%;
				overflow: hidden;
				.sub-category-list {
					padding: 0.6vw 0.6vw 0;
					min-height: 100%;
					overflow: hidden;
					.sub-category-title {
						display: flex;
						width: 95%;
						margin: 2.3vw auto;
						.line {
							position: relative;
							flex-grow: 1;
							.border-bottom-1px(#e7e7e7);
							top: -1.35vw;
						}
						.text {
							padding: 0 3.35px;
							font-size: 4vw;
							color: #ff2323;
						}
					}
					.sub-category-item {
						float: left;
						width: 31%;
						margin: 0.6vw;
            box-sizing: border-box;
            .border-1px(#e7e7e7, 0.5vw);
						p {
							height: 8vw;
							line-height: 8vw;
							white-space: nowrap;
							overflow: hidden;
							text-overflow: ellipsis;
							text-align: center;
              box-sizing: border-box;
						}
					}
				}
			}
		}
	}
</style>
