<template>
  <div class="find-carte padding">
    <div class="find-carte-list">
      <div v-for="item in carteData" :key="item.id" class="find-carte-item">
        <div class="title">
          <div class="text">
            <p>{{ item.title }}</p>
            <span>{{ item.desc }}</span>
          </div>
          <div class="avatar">
            <img :src="item.avatar">
          </div>
        </div>
        <div class="pics">
          <div v-for="image in item.images" :key="image" class="pic">
            <img :src="image">
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
      this.findData = response.data.data
      this.carteData = this.findData.carte
    })
  }
}
</script>
<style lang="less">
	.find-carte-list {
		.find-carte-item {
			padding: 2.3vw 0;
			.border-bottom-1px(#e7e7e7);
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
					line-height: 5vw;
					p {
						color: #333;
					}
					span {
						font-size: 3.2vw;
					}
				}
				.avatar {
					img {
						width: 12vw;
						height: 12vw;
						border-radius: 100vw;
						overflow: hidden;
					}
				}
			}
			.pics {
				display: flex;
				flex-wrap: wrap;
				margin-top: 1.1vw;
				.pic {
					width: 33.3%;
					padding: 1.1vw;
					box-sizing: border-box;
					img {
						width: 100%;
					}
				}
			}
		}
	}
</style>
