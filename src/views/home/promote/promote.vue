<template>
  <div class="promote padding">
    <p class="title">为你推荐</p>
    <div class="promote-list">
      <div v-for="item in menuData" :key="item.id">
        <router-link class="promote-list-item" :to="{name: 'fooddetails', params: {id: item.id}}">
          <div class="pic">
            <img :src="item.image">
          </div>
          <div class="info">
            <p class="title">{{ item.title }}</p>
            <p class="star">
              <i v-for="star in item.star" :key="star" class="fa fa-star" aria-hidden="true" /><i v-for="(star, index) in 5 - item.star" :key="index" class="fa fa-star-o" aria-hidden="true" />
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
        </router-link>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      menuData: '',
      blankStar: ''
    }
  },
  mounted() {
    this.$http.get('/api/menuData').then((response) => {
      this.menuData = response.data.data.slice(0, 3)
    })
  }
}
</script>
<style lang="less">
	.promote {
		&>.title {
			font-size: 4vw;
			color: #333;
		}
		.promote-list-item {
			display: flex;
			padding: 2.3vw 0;
			.border-bottom-1px(#e7e7e7);
			.pic {
				flex-grow: 1;
				width: 0;
				img {
          display: block;
					width: 100%;
				}
			}
			.info {
				flex-grow: 2;
				width: 0;
				padding: 4vw 0 4vw 2.3vw;
				&>.title {
					color: #333;
				}
				.star {
					i.fa-star {
						color: #f0fd24;
					}
					i.fa-star-o {
						color: #ddd;
					}
				}
				.operate {
					span {
						margin-right: 4vw;
						font-size: 3.5vw;
						color: #bbb;
						i {
							font-size: 3.5vw;
							color: #bbb;
						}
					}
				}
			}
		}
	}
</style>
