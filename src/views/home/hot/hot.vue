<template>
  <div class="hot padding">
    <p class="title">热门专题</p>
    <router-link :to="'/hotmore'" class="more">更多</router-link>
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
export default {
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
	.padding {
		position: relative;
		&>.title {
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
</style>
