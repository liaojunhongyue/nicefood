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
			font-size: 16px;
			color: #333;
		}
		.promote-list-item {
			display: flex;
			padding: 10px 0;
			border-bottom: 1px solid #e7e7e7;
			&:first-child {
				padding-top: 0;
			}
			&:last-child {
				border-bottom: 0;
			}
			.pic {
				flex-grow: 1;
				width: 0;
				img {
					width: 100%;
				}
			}
			.info {
				flex-grow: 2;
				width: 0;
				padding: 16px 0 16px 10px;
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
						margin-right: 16px;
						font-size: 12px;
						color: #bbb;
						i {
							font-size: 12px;
							color: #bbb;
						}
					}
				}
			}
		}
	}
</style>
