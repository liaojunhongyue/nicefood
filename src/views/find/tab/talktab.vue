<template>
  <div class="find-talk-tab-content">
    <ul class="find-talk-tab-list">
      <li v-for="item in templateData" :key="item.id" class="find-talk-tab-item">
        <div class="author">
          <div class="avatar">
            <img class="avatar-img" :src="item.author.avatar">
            <span class="icon">V</span>
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
			padding: 0 2.3vw;
			margin-bottom: 6.9vw;
			box-sizing: border-box;
			overflow: hidden;
			.find-talk-tab-item {
				padding: 2.3vw 0;
				.border-bottom-1px(#e7e7e7);
				.author {
					display: flex;
					.avatar {
						position: relative;
						width: 12vw;
						height: 12vw;
						border-radius: 100vw;
						.avatar-img {
							width: 100%;
							height: 100%;
						}
						.icon {
							position: absolute;
							bottom: 0px;
							right: 0px;
							height: 3.35vw;
							width: 3.35vw;
							line-height: 3.35vw;
							text-align: center;
							border-radius: 100vw;
							font-size: 3.2vw;
							color: #fff;
							background-color: #eb9605;
						}
					}
					.name {
						margin-left: 2.3vw;
						height: 12vw;
						line-height: 12vw;
						p {
							color: #ff2323;
						}
					}
				}
				.content {
					padding: 2.3vw 0;
					.pictures {
						margin-top: 2.3vw;
						width: 80%;
						display: flex;
						flex-wrap: wrap;
						.picture {
							width: 33.3%;
							height: 33.3%;
							padding: 0.5vw;
							box-sizing: border-box;
							overflow: hidden;
							img {
								width: 100%;
								height: 100%;
								border-radius: 1.2vw;
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
							font-size: 3.2vw;
							span {
								margin: 0 1.1vw;
								color: #0088cc;
							}
						}
					}
					.operate {
						float: right;
						p {
							display: inline-block;
							font-size: 3.2vw;
							color: #999;
							i {
								margin: 0 1.1vw 0 1.1vw;
							}
						}
					}
				}
			}
		}
	}
</style>
