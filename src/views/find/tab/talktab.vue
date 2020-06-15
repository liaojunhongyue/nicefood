<template>
  <div class="find-talk-tab-content">
    <ul class="find-talk-tab-list">
      <li v-for="item in templateData" :key="item.id" class="find-talk-tab-item">
        <div class="author">
          <div class="avatar">
            <img class="avatar-img" :src="item.author.avatar">
            <i class="icon">V</i>
          </div>
          <div class="name">
            <p>{{ item.author.name }}</p>
          </div>
        </div>
        <div class="content">
          <p class="text">{{ item.text }}</p>
          <div class="pictures">
            <div v-for="pic in item.images" :key="pic" class="picture">
              <img :src="pic">
            </div>
          </div>
        </div>
        <div class="desc">
          <div class="publish">
            <p>{{ item.time }}发布 来自<span>{{ item.origin }}</span></p>
          </div>
          <div class="operate">
            <p class="like"><i class="fa fa-thumbs-o-up" aria-hidden="true" />{{ item.like }}</p>
            <p class="comment"><i class="fa fa-commenting-o" aria-hidden="true" />{{ item.comment }}</p>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      findData: '',
      newData: '',
      hotData: '',
      templateData: ''
    }
  },
  watch: {
    '$route'(to, from) {
      if (to.path === '/find/talk/newtab') {
        this.templateData = this.newData
      } else if (to.path === '/find/talk/hottab') {
        this.templateData = this.hotData
      }
    }
  },
  mounted() {
    this.$http.get('/api/findData').then((response) => {
      this.findData = response.data.data
      this.newData = this.findData.talk.new
      this.hotData = this.findData.talk.hot
      const currentRoute = this.$route.path
      if (currentRoute === '/find/talk/newtab') {
        this.templateData = this.newData
      } else if (currentRoute === '/find/talk/hottab') {
        this.templateData = this.hotData
      }
    })
  }
}
</script>
<style lang="less">
	.find-talk-tab-content {
		.find-talk-tab-list {
			width: 100%;
			padding: 0 10px;
			margin-bottom: 30px;
			box-sizing: border-box;
			overflow: hidden;
			.find-talk-tab-item {
				padding: 10px 0;
				border-bottom: 1px solid #e7e7e7;
				.author {
					display: flex;
					.avatar {
						position: relative;
						width: 40px;
						height: 40px;
						border-radius: 200px;
						.avatar-img {
							width: 100%;
							height: 100%;
						}
						.icon {
							position: absolute;
							bottom: 0px;
							right: 0px;
							height: 15px;
							width: 15px;
							line-height: 15px;
							text-align: center;
							border-radius: 50px;
							font-size: 12px;
							color: #fff;
							background-color: #eb9605;
						}
					}
					.name {
						margin-left: 10px;
						height: 40px;
						line-height: 40px;
						p {
							color: #ff2323;
						}
					}
				}
				.content {
					padding: 10px 0;
					.pictures {
						margin-top: 10px;
						width: 80%;
						display: flex;
						flex-wrap: wrap;
						.picture {
							width: 33.3%;
							height: 33.3%;
							padding: 2px;
							box-sizing: border-box;
							overflow: hidden;
							img {
								width: 100%;
								height: 100%;
								border-radius: 5px;
							}
						}
					}
				}
				.desc {
					overflow: hidden;
					.publish {
						float: left;
						white-space: nowrap;
						overflow: hidden;
						p {
							font-size: 12px;
							span {
								margin: 0 5px;
								color: #0088cc;
							}
						}
					}
					.operate {
						float: right;
						p {
							display: inline-block;
							font-size: 12px;
							color: #999;
							i {
								margin: 0 5px 0 5px;
							}
						}
					}
				}
			}
		}
	}
</style>
