<template>
  <div class="user-publish-cont">
    <div class="text">
      <p class="title">{{ title }}</p>
      <router-link :to="routerlink" class="router-text">{{ routertext }}</router-link>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      title: '据说创作菜谱的人工资都涨了79%',
      routertext: '开始创作菜谱',
      routerlink: '/user/create/menu'
    }
  },
  watch: {
    '$route'(to, from) {
      if (to.path === '/user/publish/menu') {
        this.title = '据说创作菜谱的人工资都涨了79%'
        this.routertext = '开始创作菜谱'
        this.routerlink = '/user/create/menu'
      } else if (to.path === '/user/publish/article') {
        this.title = '我就是因为写了一篇文章被美食杰老板发现的'
        this.routertext = '开始写文章'
        this.routerlink = '/user/create/article'
      } else if (to.path === '/user/publish/works') {
        this.title = '把作品分享出来的人都特别美'
        this.routertext = '开始发布作品'
        this.routerlink = '/user/create/works'
      } else if (to.path === '/user/publish/talks') {
        this.title = '吃饭时不要说话，但现在可以'
        this.routertext = '开始发布食话'
        this.routerlink = '/user/create/talks'
      }
    }
  },
  created() {
    const currentRoute = this.$route.path
    if (currentRoute === '/user/publish/menu') {
      this.title = '据说创作菜谱的人工资都涨了79%'
      this.routertext = '开始创作菜谱'
      this.routerlink = '/user/create/menu'
    } else if (currentRoute === '/user/publish/article') {
      this.title = '我就是因为写了一篇文章被美食杰老板发现的'
      this.routertext = '开始写文章'
      this.routerlink = '/user/create/article'
    } else if (currentRoute === '/user/publish/works') {
      this.title = '把作品分享出来的人都特别美'
      this.routertext = '开始发布作品'
      this.routerlink = '/user/create/works'
    } else if (currentRoute === '/user/publish/talks') {
      this.title = '吃饭时不要说话，但现在可以'
      this.routertext = '开始发布食话'
      this.routerlink = '/user/create/talks'
    }
  }
}
</script>
<style lang="less">
	.user-publish-cont {
		padding: 85px 10px 10px 10px;
		.text {
			position: fixed;
			top: 40%;
			left: 0;
			width: 100%;
			padding: 0 30px;
			line-height: 25px;
			text-align: center;
			box-sizing: border-box;
			.title {
				font-size: 16px;
				color: #333;
			}
			.router-text {
				display: inline-block;
				margin-top: 20px;
				padding: 5px 15px;
				color: #ff2323;
				border: 1px solid #ff2323;
				border-radius: 3px;
			}
		}
	}
</style>
