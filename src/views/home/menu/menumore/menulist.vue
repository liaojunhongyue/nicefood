<template>
  <div class="menu-more-list-wrapper">
    <div class="title">
      <p>美味 · {{ menuTitle }}</p>
    </div>
    <ul class="menu-more-list">
      <router-link v-for="item in menuData.slice(0, 9)" :key="item.id" :to="{name: 'fooddetails', params: {id: item.id}}" class="menu-more-item">
        <img :src="item.image">
        <p class="menu-title">{{ item.title }}</p>
      </router-link>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      menuData: '',
      menuTag: '',
      menuTitle: ''
    }
  },
  watch: {
    '$route'(to, from) {
      const routeName = to.name
      switch (routeName) {
        case 'menubreakfast': this.menuTitle = '早餐'; break
        case 'menulunch': this.menuTitle = '午餐'; break
        case 'menuafternoontea': this.menuTitle = '下午茶'; break
        case 'menudinner': this.menuTitle = '晚餐'; break
        case 'menumidnight': this.menuTitle = '夜宵'; break
      }
    }
  },
  mounted() {
    this.$http.get('/api/menuData').then((response) => {
      this.menuData = response.data.data
      this.menuTitle = '早餐'
    })
  }
}
</script>
<style lang="less">
	.menu-more-list-wrapper {
		padding-top: 80px;
		.title {
			padding: 0 10px;
			line-height: 35px;
			color: #efefef;
			background-color: #f5f5f5;
		}
		.menu-more-list {
			padding: 10px;
			display: flex;
			flex-wrap: wrap;
			.menu-more-item {
				padding: 5px;
				width: 33.3%;
				box-sizing: border-box;
				img {
					width: 100%;
				}
				p {
					line-height: 25px;
					white-space: nowrap;
					text-overflow: ellipsis;
					overflow: hidden;
					color: #333;
				}
			}
		}
	}
</style>
