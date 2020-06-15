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
    this.$http.get('/api/foodCategoryData').then((response) => {
      this.foodCategoryData = response.data.data
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
		padding-top: 40px;
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
				border-right: 1px solid #e7e7e7;
				box-sizing: border-box;
				overflow: hidden;
				.main-category-item {
					padding: 20px 0;
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
					padding: 3px 3px 0;
					min-height: 100%;
					overflow: hidden;
					.sub-category-title {
						display: flex;
						width: 95%;
						margin: 10px auto;
						.line {
							position: relative;
							flex-grow: 1;
							border-bottom: 1px solid #e7e7e7;
							top: -8px;
						}
						.text {
							padding: 0 15px;
							font-size: 16px;
							color: #ff2323;
						}
					}
					.sub-category-item {
						float: left;
						width: 33.3%;
						padding: 3px;
						box-sizing: border-box;
						p {
							height: 25px;
							line-height: 25px;
							white-space: nowrap;
							overflow: hidden;
							text-overflow: ellipsis;
							text-align: center;
							border: 1px solid #e7e7e7;
							border-radius: 3px;
						}
					}
				}
			}
		}
	}
</style>
