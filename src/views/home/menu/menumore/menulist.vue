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
    this.http.get(this.api.query.menuData.url).then((response) => {
      this.menuData = response.data.data
      this.menuTitle = '早餐'
    })
  }
}
</script>
<style lang="less">
	.menu-more-list-wrapper {
		padding-top: 22vw;
		.title {
			padding: 0 2.3vw;
			line-height: 8vw;
			color: #787878;
			background-color: #f5f5f5;
		}
		.menu-more-list {
			padding: 2.3vw;
			display: flex;
			flex-wrap: wrap;
			.menu-more-item {
				padding: 1.1vw;
				width: 33.3%;
				box-sizing: border-box;
				img {
					width: 100%;
				}
				p {
					line-height: 7vw;
					white-space: nowrap;
					text-overflow: ellipsis;
					overflow: hidden;
					color: #333;
				}
			}
		}
	}
</style>
