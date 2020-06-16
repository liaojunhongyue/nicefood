<template>
  <div class="collect-menu">
    <div class="main-title"><p><i class="fa fa-star" aria-hidden="true" /> {{ collectCategory }}</p></div>
    <div v-for="item in collectData" :key="item.id" class="menu-list-item">
      <div class="pic">
        <img :src="item.image">
      </div>
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
        <div class="delete-collect">
          <i class="fa fa-trash" aria-hidden="true" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      collectCategory: '全部菜谱',
      collectData: ''
    }
  },
  watch: {
    '$route'(to, from) {
      if (to.path === '/user/collect/all') {
        this.collectCategory = '全部菜谱'
      } else if (to.path === '/user/collect/my') {
        this.collectCategory = '我的菜单'
      } else if (to.path === '/user/collect/menu') {
        this.collectCategory = '收藏菜单'
      }
    }
  },
  created() {
    const currentRoute = this.$route.path
    if (currentRoute === '/user/collect/all') {
      this.collectCategory = '全部菜谱'
    } else if (currentRoute === '/user/collect/my') {
      this.collectCategory = '我的菜单'
    } else if (currentRoute === '/user/collect/menu') {
      this.collectCategory = '收藏菜单'
    }
  },
  mounted() {
    this.$http.get('/api/menuData').then((response) => {
      this.collectData = response.data.data
    })
  }
}
</script>
<style lang="less">
	.collect-menu {
		padding: 24vw 2.3vw 2.3vw 2.3vw;
		.main-title {
			p {
				font-size: 3.2vw;
				color: #ff2323;
				opacity: 0.8;
			}
		}
		.menu-list-item {
			position: relative;
			.delete-collect {
				position: absolute;
				bottom: 2.3vw;
				right: 2.3vw;
				i {
					font-size: 5vw;
					color: #ff6453;
				}
			}
		}
	}
</style>
